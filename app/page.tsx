"use client"

import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Copy } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

const formSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
})

export default function IndexPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)

    /*     toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    }) */
    let response = await fetch(
      "https://c4-na.altogic.com/e:6474a0b6b19ad9247245c34d/lead",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
    if (response.ok) {
      toast({
        title: "Thank you for your interest!",
        description: (
          <p className="mt-2">
            We will contact you shortly to schedule a demo.
          </p>
        ),
      })
    } else {
      toast({
        title: "Something went wrong.",
        description: (
          <p className="mt-2">
            Please try again later or contact us at{" "}
            <a href="mailto:info@altogic.com">
              <span className="text-primary">
                <strong>
                  <span className="underline">info@altogic.com</span>
                </strong>
              </span>
            </a>
          </p>
        ),
      })
    }
  }

  return (
    <>
      <motion.div
        className="space-y-6 py-8 md:pb-12 md:pt-4 lg:py-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section className="sm:py-8">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <div className="flex justify-center overflow-hidden text-center dark:border-slate-700 dark:bg-transparent sm:flex-row sm:items-stretch sm:space-x-4 sm:space-y-0 sm:rounded-3xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/hero.webm"
                width="50%"
                height="50%"
              >
                <source src="/hero.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            <motion.h1
              className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Open-source Kubernetes <br className="hidden sm:inline" />
              Development Environment
            </motion.h1>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"></h1>

            <motion.p
              className="max-w-[95%] text-lg text-muted-foreground sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Powerful and Scalable Application Development Environment running
              in a Kubernetes Clusters. <br /> Efficiently build robust Node.js
              Express applications.
              <br />
            </motion.p>

            <div className="space-x-4">
              <div className="flex w-full max-w-md items-center space-x-2">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-row items-center space-x-4 align-middle"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className={buttonVariants({ variant: "outline" })}
                    >
                      Get Notified
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center space-y-4 ">
            {/* <Image
              src="/hero.webm"
              alt="demo"
              height={800}
              width={1400}
              className="overflow-hidden rounded-lg border border-transparent bg-slate-50 text-center shadow-xl dark:border-slate-700 dark:bg-transparent sm:flex-row sm:items-stretch sm:space-x-4 sm:space-y-0 sm:rounded-3xl"
            /> */}
          </div>
        </section>
      </motion.div>
      <section
        id="features"
        className="container max-w-full space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            All-in-one Backend Development
          </h2>
          <p className="max-w-[90%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Application server, database, authentication, queues, cache,
            cronjobs, realtime — it&apos;s all here. Agnost gives developers the
            technologies to build scalable & secure backend apps in minutes.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="h-12 w-12 fill-current"
              >
                <path
                  fill="currentColor"
                  d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Database</h3>
                <p className="text-sm text-muted-foreground">
                  MSSQL, Oracle, MongoDB, MySQL, or PostgreSQL.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="h-12 w-12 fill-current"
              >
                <g
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M9 3a1 1 0 0 1 .608.206l.1.087L12.414 6H19a3 3 0 0 1 2.995 2.824L22 9v8a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V6a3 3 0 0 1 2.824-2.995L5 3h4z"
                  />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Storage</h3>
                <p className="text-sm text-muted-foreground">
                  Scalable and reliable storage options.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="h-12 w-12 fill-current"
              >
                <path
                  fill="currentColor"
                  d="M19.99 4c0-1.1-.89-2-1.99-2h-7.17c-.53 0-1.04.21-1.42.59L4.59 7.41C4.21 7.79 4 8.3 4 8.83V20c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM8 19c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm-8-4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm4 4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm0-6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1zm4 2c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Cache</h3>
                <p className="text-sm text-muted-foreground">
                  Support for Redis speed data access.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="h-12 w-12 fill-current"
              >
                <g fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Message Queue</h3>
                <p className="text-sm text-muted-foreground">
                  Support for RabbitMQ and Kafka.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                className="h-12 w-12 fill-current"
              >
                <circle cx="21" cy="26" r="2" fill="currentColor" />
                <circle cx="21" cy="6" r="2" fill="currentColor" />
                <circle cx="4" cy="16" r="2" fill="currentColor" />
                <path
                  fill="currentColor"
                  d="M28 12a3.996 3.996 0 0 0-3.858 3h-4.284a3.966 3.966 0 0 0-5.491-2.643l-3.177-3.97A3.963 3.963 0 0 0 12 6a4 4 0 1 0-4 4a3.96 3.96 0 0 0 1.634-.357l3.176 3.97a3.924 3.924 0 0 0 0 4.774l-3.176 3.97A3.96 3.96 0 0 0 8 22a4 4 0 1 0 4 4a3.962 3.962 0 0 0-.81-2.387l3.176-3.97A3.966 3.966 0 0 0 19.858 17h4.284A3.993 3.993 0 1 0 28 12ZM6 6a2 2 0 1 1 2 2a2.002 2.002 0 0 1-2-2Zm2 22a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm8-10a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm12 0a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Realtime</h3>
                <p className="text-sm text-muted-foreground">
                  Support for WebSockets and Server-Sent Events.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="640"
                height="512"
                viewBox="0 0 640 512"
                className="h-12 w-12 fill-current"
              >
                <path
                  fill="currentColor"
                  d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Authentication and authorization OOTB.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                className="h-12 w-12 fill-current"
              >
                <path
                  fill="currentColor"
                  d="M31.47 3.84a5.78 5.78 0 0 0-7.37-.63a16.08 16.08 0 0 1 8.2 7.65a5.73 5.73 0 0 0-.83-7.02Z"
                  className="clr-i-solid clr-i-solid-path-1"
                />
                <path
                  fill="currentColor"
                  d="M11.42 3.43a5.77 5.77 0 0 0-7.64.41a5.72 5.72 0 0 0-.38 7.64a16.08 16.08 0 0 1 8.02-8.05Z"
                  className="clr-i-solid clr-i-solid-path-2"
                />
                <path
                  fill="currentColor"
                  d="M18 4a14 14 0 0 0-9.89 23.88l-2.55 2.55A1 1 0 1 0 7 31.84l2.66-2.66a13.9 13.9 0 0 0 16.88-.08l2.74 2.74a1 1 0 0 0 1.41-1.41L28 27.78A14 14 0 0 0 18 4Zm7.47 17.43a1 1 0 0 1-1.33.47L17 18.44V9.69a1 1 0 0 1 2 0v7.5l6 2.91a1 1 0 0 1 .49 1.33Z"
                  className="clr-i-solid clr-i-solid-path-3"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Cronjobs</h3>
                <p className="text-sm text-muted-foreground">
                  Scheduled jobs that run at specific times or intervals.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="h-12 w-12 fill-current"
              >
                <path
                  fill="currentColor"
                  d="M18.618 7.462L6.403 2.085a1.007 1.007 0 0 0-.77-.016a1.002 1.002 0 0 0-.552.537l-3 7a1 1 0 0 0 .525 1.313L9.563 13.9L8.323 17H4v-3H2v8h2v-3h4.323c.823 0 1.552-.494 1.856-1.258l1.222-3.054l3.419 1.465a1 1 0 0 0 1.311-.518l3-6.857a1 1 0 0 0-.513-1.316zm1.312 8.91l-1.858-.742l1.998-5l1.858.741z"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Security</h3>
                <p className="text-sm text-muted-foreground">
                  API keys, Rate limiters, Domain/IP white-listing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Agnost also includes a low-code endpoint designer that allows you to
            create and deploy your APIs. You can create and manage your own
            custom express routes and middlewares.
          </p>
        </div>
      </section>

      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Realtime Application Development
            <br className="hidden sm:inline" />
          </h1>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"></h1>
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Near-realtime app development platform for Express routes and
            middlewares. Whatever changes you made in your code deployed to your
            application servers in seconds. Export your application in a
            standardized format and import it at any other Agnost Kubernetes
            cluster.
          </p>
        </div>
      </section>

      <section className="space-y-6 bg-slate-50 py-8 pt-6 dark:bg-transparent md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Fully-customizable Development
            <br className="hidden sm:inline" />
            Environment in Minutes
          </h1>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"></h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            MySQL, PostgreSQL, MongoDB, and Redis databases. RabbitMQ and Kafka
            message queues. Cronjobs. Realtime. All in one place.
          </p>

          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[200px] flex-col items-center justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256"
                  height="153"
                  viewBox="0 0 256 153"
                  className="h-12 w-12 fill-current"
                >
                  <path
                    fill="#252F3E"
                    d="M72.392 55.438c0 3.137.34 5.68.933 7.545a45.373 45.373 0 0 0 2.712 6.103c.424.678.593 1.356.593 1.95c0 .847-.508 1.695-1.61 2.543l-5.34 3.56c-.763.509-1.526.763-2.205.763c-.847 0-1.695-.424-2.543-1.187a26.224 26.224 0 0 1-3.051-3.984c-.848-1.44-1.696-3.052-2.628-5.001c-6.612 7.798-14.92 11.698-24.922 11.698c-7.12 0-12.8-2.035-16.954-6.103c-4.153-4.07-6.272-9.495-6.272-16.276c0-7.205 2.543-13.054 7.714-17.462c5.17-4.408 12.037-6.612 20.768-6.612c2.882 0 5.849.254 8.985.678c3.137.424 6.358 1.102 9.749 1.865V29.33c0-6.443-1.357-10.935-3.985-13.563c-2.712-2.628-7.29-3.9-13.817-3.9c-2.967 0-6.018.34-9.155 1.103c-3.136.762-6.188 1.695-9.155 2.882c-1.356.593-2.373.932-2.967 1.102c-.593.17-1.017.254-1.356.254c-1.187 0-1.78-.848-1.78-2.628v-4.154c0-1.356.17-2.373.593-2.966c.424-.594 1.187-1.187 2.374-1.78c2.967-1.526 6.527-2.798 10.68-3.815C33.908.763 38.316.255 42.978.255c10.088 0 17.463 2.288 22.21 6.866c4.662 4.577 7.036 11.528 7.036 20.853v27.464h.17ZM37.976 68.323c2.798 0 5.68-.508 8.731-1.526c3.052-1.017 5.765-2.882 8.053-5.425c1.357-1.61 2.374-3.39 2.882-5.425c.509-2.034.848-4.493.848-7.375v-3.56a70.791 70.791 0 0 0-7.799-1.441a63.874 63.874 0 0 0-7.968-.509c-5.68 0-9.833 1.102-12.63 3.391c-2.798 2.289-4.154 5.51-4.154 9.748c0 3.984 1.017 6.951 3.136 8.986c2.035 2.119 5.002 3.136 8.901 3.136Zm68.069 9.155c-1.526 0-2.543-.254-3.221-.848c-.678-.508-1.272-1.695-1.78-3.305L81.124 7.799c-.51-1.696-.764-2.798-.764-3.391c0-1.356.678-2.12 2.035-2.12h8.307c1.61 0 2.713.255 3.306.848c.678.509 1.187 1.696 1.695 3.306l14.241 56.117l13.224-56.117c.424-1.695.933-2.797 1.61-3.306c.679-.508 1.866-.847 3.392-.847h6.781c1.61 0 2.713.254 3.39.847c.679.509 1.272 1.696 1.611 3.306l13.394 56.795L168.01 6.442c.508-1.695 1.102-2.797 1.695-3.306c.678-.508 1.78-.847 3.306-.847h7.883c1.357 0 2.12.678 2.12 2.119c0 .424-.085.848-.17 1.356c-.085.509-.254 1.187-.593 2.12l-20.43 65.525c-.508 1.696-1.101 2.798-1.78 3.306c-.678.509-1.78.848-3.22.848h-7.29c-1.611 0-2.713-.254-3.392-.848c-.678-.593-1.271-1.695-1.61-3.39l-13.14-54.676l-13.054 54.59c-.423 1.696-.932 2.798-1.61 3.391c-.678.594-1.865.848-3.39.848h-7.291Zm108.927 2.289c-4.408 0-8.816-.509-13.054-1.526c-4.239-1.017-7.544-2.12-9.748-3.39c-1.357-.764-2.29-1.611-2.628-2.374a5.983 5.983 0 0 1-.509-2.374V65.78c0-1.78.678-2.628 1.95-2.628a4.8 4.8 0 0 1 1.526.255c.508.17 1.271.508 2.119.847a46.108 46.108 0 0 0 9.324 2.967a50.907 50.907 0 0 0 10.088 1.017c5.34 0 9.494-.932 12.376-2.797c2.882-1.865 4.408-4.577 4.408-8.053c0-2.373-.763-4.323-2.289-5.934c-1.526-1.61-4.408-3.051-8.561-4.408l-12.292-3.814c-6.188-1.95-10.765-4.832-13.563-8.647c-2.797-3.73-4.238-7.883-4.238-12.291c0-3.56.763-6.697 2.289-9.41c1.525-2.712 3.56-5.085 6.103-6.95c2.543-1.95 5.425-3.391 8.816-4.408c3.39-1.017 6.95-1.441 10.68-1.441c1.865 0 3.815.085 5.68.339c1.95.254 3.73.593 5.51.932c1.695.424 3.306.848 4.832 1.357c1.526.508 2.712 1.017 3.56 1.525c1.187.679 2.034 1.357 2.543 2.12c.509.678.763 1.61.763 2.797v3.984c0 1.78-.678 2.713-1.95 2.713c-.678 0-1.78-.34-3.22-1.018c-4.833-2.204-10.258-3.306-16.276-3.306c-4.832 0-8.647.763-11.275 2.374c-2.627 1.61-3.984 4.069-3.984 7.544c0 2.374.848 4.408 2.543 6.019c1.696 1.61 4.832 3.221 9.325 4.662l12.037 3.815c6.103 1.95 10.511 4.662 13.139 8.137c2.628 3.476 3.9 7.46 3.9 11.868c0 3.645-.764 6.951-2.205 9.833c-1.525 2.882-3.56 5.425-6.188 7.46c-2.628 2.119-5.764 3.645-9.409 4.747c-3.815 1.187-7.799 1.78-12.122 1.78Z"
                  />
                  <path
                    fill="#F90"
                    d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534c-48.827 0-92.821-18.056-126.05-48.064c-2.628-2.373-.255-5.594 2.881-3.73c35.942 20.854 80.276 33.484 126.136 33.484c30.94 0 64.932-6.442 96.212-19.666c4.662-2.12 8.646 3.052 4.068 6.442Zm11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102c-2.713.34-3.137-2.034-.678-3.814c15.936-11.19 42.13-7.968 45.181-4.239c3.052 3.815-.848 30.008-15.767 42.554c-2.288 1.95-4.492.933-3.475-1.61c3.39-8.393 10.935-27.296 7.375-31.789Z"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold">Amazon Web Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Deploy your apps to AWS EKS
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[200px] flex-col items-center justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256"
                  height="256"
                  viewBox="0 0 128 128"
                  className="h-10 w-10 fill-current"
                >
                  <defs>
                    <linearGradient
                      id="deviconAzure0"
                      x1="60.919"
                      x2="18.667"
                      y1="9.602"
                      y2="134.423"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#114A8B" />
                      <stop offset="1" stopColor="#0669BC" />
                    </linearGradient>
                    <linearGradient
                      id="deviconAzure1"
                      x1="74.117"
                      x2="64.344"
                      y1="67.772"
                      y2="71.076"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopOpacity=".3" />
                      <stop offset=".071" stopOpacity=".2" />
                      <stop offset=".321" stopOpacity=".1" />
                      <stop offset=".623" stopOpacity=".05" />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="deviconAzure2"
                      x1="68.742"
                      x2="115.122"
                      y1="5.961"
                      y2="129.525"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3CCBF4" />
                      <stop offset="1" stopColor="#2892DF" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#deviconAzure0)"
                    d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 0 1-6.146 4.413H6.733a6.482 6.482 0 0 1-5.262-2.699a6.474 6.474 0 0 1-.876-5.848L39.944 4.414A6.488 6.488 0 0 1 46.09 0z"
                    transform="translate(.587 4.468) scale(.91904)"
                  />
                  <path
                    fill="#0078d4"
                    d="M97.28 81.607H37.987a2.743 2.743 0 0 0-1.874 4.751l38.1 35.562a5.991 5.991 0 0 0 4.087 1.61h33.574z"
                  />
                  <path
                    fill="url(#deviconAzure1)"
                    d="M46.09.002A6.434 6.434 0 0 0 39.93 4.5L.644 120.897a6.469 6.469 0 0 0 6.106 8.653h32.48a6.942 6.942 0 0 0 5.328-4.531l7.834-23.089l27.985 26.101a6.618 6.618 0 0 0 4.165 1.519h36.396l-15.963-45.616l-46.533.011L86.922.002z"
                    transform="translate(.587 4.468) scale(.91904)"
                  />
                  <path
                    fill="url(#deviconAzure2)"
                    d="M98.055 4.408A6.476 6.476 0 0 0 91.917.002H46.575a6.478 6.478 0 0 1 6.137 4.406l39.35 116.594a6.476 6.476 0 0 1-6.137 8.55h45.344a6.48 6.48 0 0 0 6.136-8.55z"
                    transform="translate(.587 4.468) scale(.91904)"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold">Microsoft Azure</h3>

                  <p className="text-sm text-muted-foreground">
                    Deploy your apps to Azure AKS
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[200px] flex-col items-center justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256"
                  height="256"
                  viewBox="0 0 256 256"
                  className="h-12 w-12 fill-current"
                >
                  <g fill="none">
                    <rect width="256" height="256" />
                    <path
                      fill="#EA4335"
                      d="m161.009 92.39l17.385-17.386l1.159-7.32c-31.68-28.807-82.04-25.54-110.6 6.816c-7.932 8.986-13.817 20.19-16.955 31.76l6.226-.878l34.77-5.733l2.684-2.745c15.466-16.986 41.617-19.272 59.475-4.82l5.856.305Z"
                    />
                    <path
                      fill="#4285F4"
                      d="M203.16 105.749a78.318 78.318 0 0 0-23.607-38.064l-24.4 24.4a43.37 43.37 0 0 1 15.921 34.404v4.331c11.993 0 21.716 9.722 21.716 21.715c0 11.994-9.723 21.473-21.716 21.473h-43.493l-4.27 4.636v26.047l4.27 4.087h43.493c31.195.243 56.681-24.605 56.924-55.8a56.483 56.483 0 0 0-24.838-47.229Z"
                    />
                    <path
                      fill="#34A853"
                      d="M84.149 208.778h43.432v-34.77H84.149a21.312 21.312 0 0 1-8.906-1.952l-6.161 1.891l-17.507 17.385l-1.525 5.917c9.818 7.413 21.796 11.582 34.099 11.529Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M84.149 95.989C52.953 96.175 27.815 121.615 28 152.81a56.486 56.486 0 0 0 22.049 44.438l25.193-25.193c-10.93-4.938-15.787-17.802-10.849-28.731c4.938-10.93 17.802-15.787 28.73-10.85a21.718 21.718 0 0 1 10.85 10.85l25.193-25.193a56.421 56.421 0 0 0-45.018-22.143Z"
                    />
                  </g>
                </svg>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold">Google Cloud Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    Deploy your apps to GCP GKE
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[200px] flex-col items-center justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-12 w-12 fill-current"
                >
                  <path
                    fill="currentColor"
                    d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
                  />
                </svg>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold">On-Premise</h3>
                  <p className="text-sm text-muted-foreground">
                    Deploy your apps to your own on-prem Kubernetes clusters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Coming soon
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            If you want to be an early adopter, or maintainer, join the mailing
            list.
          </p>
        </div>

        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="space-x-4">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-row items-center space-x-4 align-middle"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="hello@developer.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className={buttonVariants({ size: "default" })}
                  >
                    Subscribe
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
