import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable()
export class ExportService {
  exportToExcel(
    data: any[],
    title: string,
    header: any,
    fileName: string
  ) {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Car Data', {
      pageSetup: { paperSize: 9, orientation: 'landscape' },
    });

    // Add new row
    let titleRow = worksheet.addRow([title]);
    worksheet.mergeCells('A1', 'F1');
    // Set font, size and style in title row.
    titleRow.font = {
      name: 'Comic Sans MS',
      family: 4,
      size: 16,
      underline: 'double',
      bold: true,
    };
    titleRow.alignment = { vertical: 'middle', horizontal: 'center' };
    // Blank Row
    worksheet.addRow([]);

    //Add Header Row
    let headerRow = worksheet.addRow(header);

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' },
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
    });

    // Add Data and Conditional Formatting
    data.forEach((d) => {
      let row = worksheet.addRow(d);
      let qty: any = row.getCell(5);

      let color = 'FF99FF99';
      if (+qty?.value < 500) {
        color = 'FF9999';
      }
      qty.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: color },
      };
      row.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
      row.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {
          argb: 'FFFFFFFF',
        },
      };
      row.font = {
        color: {
          argb: '00000000',
        },
        bold: false,
      };
      row.eachCell((cell, number) => {
        cell.border = {
          top: {
            style: 'thin',
          },
          left: {
            style: 'thin',
          },
          bottom: {
            style: 'thin',
          },
          right: {
            style: 'thin',
          },
        };
      });
    });

    worksheet.getColumn(1).width = 10;
    worksheet.getColumn(2).width = 20;
    worksheet.getColumn(3).width = 20;
    worksheet.getColumn(4).width = 20;
    worksheet.getColumn(5).width = 20;

    // worksheet.fillFormula('E4:A10', 'E4+1', [2, 3, 4, 5, 6, 7, 8, 9, 10]);
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, `${fileName}.xlsx`);
    });
  }

}
