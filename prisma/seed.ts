import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // 1. Buat Accessor (Organisasi Penerbit)
  const accessor = await prisma.accessor.create({
    data: {
      name: "NVQ Training Org",
      email: "info@nvq-training.org",
      organization: "National Vocational Qualification Center",
      phone: "+441234567890",
    },
  })

  // 2. Buat Course
  const course = await prisma.course.create({
    data: {
      title: "NVQ Level 2 in Bricklaying",
      description: "Practical qualification for professional bricklayers",
      accessor: {
        connect: { id: accessor.id }
      }
    },
  })

  // 3. Ambil User yang sudah ada
  const student = await prisma.user.findUniqueOrThrow({
    where: { email: "business.ikurniawan@gmail.com" },
  })

  const issuer = await prisma.user.findUniqueOrThrow({
    where: { email: "business.ikurniawan@gmail.com" },
  })

  // 4. Tambahkan 5 Sertifikat
  const certificates = [
    {
      certificateId: "CERT-NVQ-0001",
      issuedDate: new Date("2024-01-10"),
      expiryDate: new Date("2027-01-10"),
    },
    {
      certificateId: "CERT-NVQ-0002",
      issuedDate: new Date("2024-02-15"),
      expiryDate: new Date("2027-02-15"),
    },
    {
      certificateId: "CERT-NVQ-0003",
      issuedDate: new Date("2024-03-20"),
      expiryDate: new Date("2027-03-20"),
    },
    {
      certificateId: "CERT-NVQ-0004",
      issuedDate: new Date("2024-04-05"),
      expiryDate: new Date("2027-04-05"),
    },
    {
      certificateId: "CERT-NVQ-0005",
      issuedDate: new Date("2024-04-18"),
      expiryDate: new Date("2027-04-18"),
    }
  ]

  for (const cert of certificates) {
    await prisma.certificate.create({
      data: {
        certificateId: cert.certificateId,
        userId: student.id,
        courseId: course.id,
        issuerId: issuer.id,
        accessorId: accessor.id,
        issuedDate: cert.issuedDate,
        expiryDate: cert.expiryDate,
        validated: true,
      },
    })
  }

  console.log("✅ Seeding selesai: 1 accessor, 1 course, 5 certificates.")
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
