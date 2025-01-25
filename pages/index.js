// "use client";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  console.log("fetch");

  return (
    <div>
      <Navbar />
      <SearchBox />
    </div>
  );
}
