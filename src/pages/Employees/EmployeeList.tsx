import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  InputBase,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

import {
  PageContainer,
  InnerBox,
  HeaderSection,
  SearchWrapper,
  StyledPaper,
} from "./EmployeeListStyles";
import { useState } from "react";

const EmployeeList = () => {
  const employees = useSelector((state: RootState) => state.employee.list);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((emp) =>
    emp.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer>
      <Typography variant="h5" fontWeight="bold">
        Employees
      </Typography>

      <InnerBox>
        <HeaderSection>
          <Typography variant="h6" fontWeight="bold">
            All Active Employees
          </Typography>

          <form style={{ width: 300 }}>
            <SearchWrapper>
              <SearchIcon sx={{ color: "#999", mr: 1 }} />
              <InputBase
                placeholder="Enter Employee Name"
                sx={{ flex: 1 }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                inputProps={{ "aria-label": "search employees" }}
              />
            </SearchWrapper>
          </form>
        </HeaderSection>

        <TableContainer component={StyledPaper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#e0e0e0" }}>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Job Title</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Reporting Manager
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((emp, index) => (
                <TableRow key={index}>
                  <TableCell>{emp.employeeName}</TableCell>
                  <TableCell>{emp.employeeJobTitle}</TableCell>
                  <TableCell>{emp.employeeManager}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InnerBox>
    </PageContainer>
  );
};

export default EmployeeList;
