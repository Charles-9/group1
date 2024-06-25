import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "./components/ui/table"
  

const Leaderboard: React.FC = () => {
    return (
        <>
            <h1>Leaderboard</h1>

            <ol>
                <li>Jack Ryan</li>
                <li>Paul Simon</li>
                <li>Alex Nicholson</li>
            </ol>
            <Button>Click me</Button>
            <Link to="/"><h2>Back to home screen</h2></Link>
            <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

        </>
    );
};

export default Leaderboard;