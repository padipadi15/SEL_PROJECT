package com.excelutility;

import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelLogin {
	public String excel_username(int a) throws IOException{
		FileInputStream fil = new FileInputStream("C:\\Users\\Surya Tja\\Desktop\\selenium\\surya\\AUTOMATIONTESTING_PROJECT\\logindetails.xlsx");
		XSSFWorkbook workbook = new XSSFWorkbook(fil);
		XSSFSheet sheet = workbook.getSheet("Sheet1");
		int count = sheet.getLastRowNum();
		System.out.println(count);
		
			XSSFRow row= sheet.getRow(a);
			XSSFCell cell =row.getCell(0);
			String userid = cell.getStringCellValue();
		return userid;
		
		
	}
	
	public String excel_passowrd(int b) throws IOException{
		FileInputStream fil = new FileInputStream("C:\\Users\\Surya Tja\\Desktop\\selenium\\surya\\AUTOMATIONTESTING_PROJECT\\logindetails.xlsx");
		XSSFWorkbook workbook = new XSSFWorkbook(fil);
		XSSFSheet sheet = workbook.getSheet("Sheet1");
		int count = sheet.getLastRowNum();
		System.out.println(count);
		
			XSSFRow row= sheet.getRow(b);
			XSSFCell cell =row.getCell(1);
			String password = cell.getStringCellValue();
		
		return password;
	}

}


