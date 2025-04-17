import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

// Ganti jika watermark/logo kamu beda
const watermark = '/ok4uk-logo.svg'; // Pastikan ini file Base64 atau public URL

const styles = StyleSheet.create({
  page: {
    width: 842, // A4 Landscape
    height: 595,
    padding: 30,
    position: 'relative',
    fontFamily: 'Times-Roman',
    fontSize: 12,
    color: '#000',
  },
  frame: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    border: '4 solid #1E3A8A',
    borderRadius: 8,
  },
  watermark: {
    position: 'absolute',
    top: '30%',
    left: '25%',
    width: 400,
    opacity: 0.07,
  },
  content: {
    position: 'relative',
    textAlign: 'center',
    marginTop: 80,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  qualification: {
    fontSize: 18,
    marginBottom: 10,
  },
  footer: {
    marginTop: 60,
    paddingHorizontal: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 12,
  },
  signature: {
    textAlign: 'center',
    marginTop: 20,
  },
  line: {
    marginTop: 30,
    borderTop: '1 solid #000',
    width: 200,
    marginHorizontal: 'auto',
  },
  qrCodeContainer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    width: 80,
    height: 80,
  },
});

interface CertificatePDFProps {
  data: {
    fullName: string;
    nvqLevel: string;
    unitTitle: string;
    issuedDate: string;
    certificateId: string;
    assessorName: string;
    trainingCenter: string;
  };
  qrCodeBase64: string;
}

export function CertificatePDF({ data, qrCodeBase64 }: CertificatePDFProps) {
  return (
    <Document>
      <Page size={[842, 595]} style={styles.page}>
        {/* Border/frame */}
        <View style={styles.frame} />

        {/* Watermark */}
        <Image src={watermark} style={styles.watermark} />

        {/* Isi Sertifikat */}
        <View style={styles.content}>
          <Text style={styles.title}>OK4UK Academy</Text>
          <Text style={styles.subtitle}>Certificate of Achievement</Text>

          <Text>This is to certify that</Text>
          <Text style={styles.name}>{data.fullName || 'Full Name'}</Text>

          <Text>has successfully completed</Text>
          <Text style={styles.qualification}>
            {data.nvqLevel} in {data.unitTitle}
          </Text>

          <Text style={{ marginTop: 20 }}>Issued on: {data.issuedDate}</Text>
          <Text style={{ marginTop: 5, fontSize: 10 }}>
            Certificate ID: {data.certificateId}
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.signature}>
            <View style={styles.line} />
            <Text>{data.assessorName}</Text>
            <Text>Assessor</Text>
          </View>

          <View style={{ textAlign: 'right' }}>
            <Text>Issued by</Text>
            <Text>{data.trainingCenter}</Text>
          </View>
        </View>

        {/* QR Code */}
        {qrCodeBase64 && (
          <View style={styles.qrCodeContainer}>
            <Image src={qrCodeBase64} style={{ width: 80, height: 80 }} />
          </View>
        )}
      </Page>
    </Document>
  );
}
