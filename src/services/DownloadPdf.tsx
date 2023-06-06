import Pdf from "./../assets/JulienBogiraud_SOFTWARE ENGINEER.pdf";
import { Button, Icon } from "@chakra-ui/react";
import { HiDocumentDownload } from "react-icons/hi";

interface Props {
  size?: string;
}

const DownloadPdf = ({ size = "100%" }: Props) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "JulienBogiraud_SOFTWARE ENGINEER";

    link.href = Pdf;
    console.table(Pdf);
    link.click();
  };
  return (
    <Button
      width={size}
      marginTop={2}
      colorScheme="teal"
      size="sm"
      onClick={handleDownload}
      leftIcon={<Icon key="downloadPdf" as={HiDocumentDownload}></Icon>}
    >
      <p>CV</p>
    </Button>
  );
};

export default DownloadPdf;
