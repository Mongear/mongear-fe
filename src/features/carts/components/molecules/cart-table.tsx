import { Input } from "@/components/atoms/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/atoms/table";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {}
const CartTable = ({ className }: Props) => {
  return (
    <Table className={cn(className, "w-full")}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-64">Product</TableHead>
            <TableHead className="w-24">Price</TableHead>
            <TableHead className="w-36">Quantity</TableHead>
            <TableHead className="text-right w-36">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium flex items-center space-x-2">
              <Image
                src="https://placehold.co/600x400.png"
                alt=""
                height={128}
                width={128}
                className="object-cover"
              />
              <h2 className="truncate max-w-52">LCD Monitor</h2>
            </TableCell>
            <TableCell>32</TableCell>
            <TableCell><Input type="number" className="max-w-32" value={1} /></TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium flex items-center space-x-2">
              <Image
                src="https://placehold.co/600x400.png"
                alt=""
                height={128}
                width={128}
                className="object-cover"
              />
              <h2 className="truncate max-w-52">LCD Monitor</h2>
            </TableCell>
            <TableCell>32</TableCell>
            <TableCell><Input type="number" className="max-w-32" value={1} /></TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium flex items-center space-x-2">
              <Image
                src="https://placehold.co/600x400.png"
                alt=""
                height={128}
                width={128}
                className="object-cover"
              />
              <h2 className="truncate max-w-52">LCD Monitor</h2>
            </TableCell>
            <TableCell>32</TableCell>
            <TableCell><Input type="number" className="max-w-32" value={1} /></TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Table >
  )
}

export default CartTable;
