import * as XLSX from "xlsx";

import { Button } from "../../../@/components/ui/button";
import { useSideBarColors } from "../../store/sideBarStore";

interface ExportCSVProps<TData> {
  data: TData[];

  fileName?: string;

  buttonText?: string;

  className?: string;
}

export default function ExportCSV<TData>({
  data,

  fileName = "export",

  buttonText = "Export CSV",

  className,
}: ExportCSVProps<TData>) {

  const exportToCSV = () => {

    if (!data?.length) return;

    // CREATE WORKSHEET
    const worksheet =
      XLSX.utils.json_to_sheet(data);

    // CONVERT TO CSV
    const csv =
      XLSX.utils.sheet_to_csv(worksheet);

    // CREATE BLOB
    const blob = new Blob(
      [csv],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    // DOWNLOAD FILE
    const link =
      document.createElement("a");

    const url =
      URL.createObjectURL(blob);

    link.href = url;

    link.download = `${fileName}.csv`;

    link.click();

    URL.revokeObjectURL(url);
  };


const colors = useSideBarColors()
  return (
    <Button
      onClick={exportToCSV}
      className={`cursor-pointer  text-white ${className}`}
      style={{backgroundColor:colors.overlayColor}}
    >
      {buttonText}
    </Button>
  );
}