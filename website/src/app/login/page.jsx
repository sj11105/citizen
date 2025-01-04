"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { FileUploadDemo } from "../components/upload";

export default function AnimatedLogin() {
  const cards = [
    {
      id: 1,
      content: "Get\nAnd\nUpgrade",
      color: "bg-yellow-200",
      hasPlus: true,
    },
    {
      id: 2,
      content: "Total Care.\nTotal Different.",
      color: "bg-purple-400",
    },
    {
      id: 3,
      content: "",
      color: "bg-blue-900/30",
    },
    {
      id: 4,
      content: "",
      color: "bg-blue-900/30",
    },
    {
      id: 5,
      content: "Own\nyour power",
      color: "bg-yellow-200",
      hasPlus: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] flex gap-8 items-center">
        {/* Animated Cards Grid */}
        <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className={`relative rounded-3xl ${card.color} p-6 flex items-center justify-center`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: card.id * 0.2,
              }}
            >
              {card.hasPlus && (
                <span className="absolute top-4 left-4 text-2xl">+</span>
              )}
              <p className="text-black text-xl font-medium whitespace-pre-line">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sign Up Form */}
        <div className="flex-1 max-w-md">
          <div className="space-y-16">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-gray-400">Get the best scheme for you!</p>
            </div>
            <div className="flex-1 max-w-md">
              <div className="space-y-16">
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold">Sign Up</h1>
                  <p className="text-gray-400">Get the best scheme for you!</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="First Name"
                      className="bg-gray-900 border-gray-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-gray-900 border-gray-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Password"
                      className="bg-gray-900 border-gray-800"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-black px-2 text-gray-400"></span>
                    </div>
                  </div>
                  <div className="grid  gap-4">
                    <Button className="w-full bg-white text-black hover:bg-gray-100">
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
