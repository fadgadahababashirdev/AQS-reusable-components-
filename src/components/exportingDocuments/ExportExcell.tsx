import * as XLSX from "xlsx";

import { Button } from "../../../@/components/ui/button";

interface ExportExcelProps<TData> {
  data: TData[];

  fileName?: string;

  sheetName?: string;

  buttonText?: string;

  className?: string;
}

export default function ExportExcel<TData>({
  data,

  fileName = "Muhabura users ",

  sheetName = "Muhabura users",

  buttonText = "Export Excel",

  className,
}: ExportExcelProps<TData>) {
  const exportToExcel = () => {
    if (!data?.length) return;

    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
    <Button onClick={exportToExcel} className={`cursor-pointer ${className}`}>
      {buttonText}
    </Button>
  );
}
