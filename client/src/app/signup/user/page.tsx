"use client"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { useState,FormEvent } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>):Promise<void> => {
    e.preventDefault();
    const userData={"name":firstName,"email":email,"password":password, "phoneNumber": 1234567891}
    
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      // if (!response.ok) {
      //   throw new Error("signup failed");
      // }

      const result = await response.json();
      console.log(result)
  
    } catch (error) {
      console.log(error)
    } 
   };
  return (
     <div className="flex min-h-screen items-center justify-center p-20">
    <Card className="mx-auto max-w-sm bg-slate-100">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form  onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max"  value={firstName} required onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson"  value={lastName} required onChange={(e) => setLastName(e.target.value)}/>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          {/* <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/"  className="underline">
            Sign in
          </Link>
        </div>

        </form>

      </CardContent>
    </Card>
     </div>
  )
}

