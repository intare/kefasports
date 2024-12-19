"use client"

import { Facebook, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
  social: {
    linkedin?: string
    twitter?: string
    facebook?: string
  }
}

export function TeamMember({ name, role, image, bio, social }: TeamMemberProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card">
      <div className="relative aspect-[3/4]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-white/80">{role}</p>
          <p className="text-sm text-white/60">{bio}</p>
          
          <div className="flex gap-4 pt-4">
            {social.linkedin && (
              <Link 
                href={social.linkedin}
                className="text-white/60 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            )}
            {social.twitter && (
              <Link 
                href={social.twitter}
                className="text-white/60 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            )}
            {social.facebook && (
              <Link 
                href={social.facebook}
                className="text-white/60 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}