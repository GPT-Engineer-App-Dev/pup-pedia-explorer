import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Heart, PawPrint } from "lucide-react";
import { motion } from "framer-motion";
import VotesOverTimeChart from "../components/VotesOverTimeChart";

const animals = [
  {
    type: "dog",
    name: "Dogs",
    description: "Loyal, friendly, and often called 'man's best friend'.",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    facts: [
      "Dogs have an exceptional sense of smell.",
      "They can understand up to 250 words and gestures.",
      "A dog's nose print is unique, like a human's fingerprint.",
    ],
    traits: ["Loyal", "Playful", "Protective"]
  },
  {
    type: "cat",
    name: "Cats",
    description: "Independent, graceful, and known for their curious nature.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    facts: [
      "Cats spend 70% of their lives sleeping.",
      "They can rotate their ears 180 degrees.",
      "A group of cats is called a 'clowder'.",
    ],
    traits: ["Independent", "Agile", "Curious"]
  }
];

const AnimalCard = ({ animal }) => {
  const [showFacts, setShowFacts] = useState(false);
  const [likes, setLikes] = useState(0);

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full border-purple-200 shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-100 to-indigo-100">
          <CardTitle className="text-2xl flex items-center text-purple-700">
            {animal.type === "dog" ? <Dog className="mr-2 h-6 w-6 text-purple-600" /> : <Cat className="mr-2 h-6 w-6 text-purple-600" />}
            {animal.name}
          </CardTitle>
          <CardDescription className="text-purple-600">{animal.description}</CardDescription>
        </CardHeader>
        <CardContent className="bg-white p-4">
          <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover rounded-md mb-4" />
          
          <motion.div
            initial={false}
            animate={{ height: showFacts ? "auto" : 0, opacity: showFacts ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4">
              <h3 className="font-bold text-purple-700 mb-2">Fun Facts:</h3>
              <ul className="list-disc list-inside text-sm text-purple-600 mb-4">
                {animal.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
              <h3 className="font-bold text-purple-700 mb-2">Key Traits:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {animal.traits.map((trait, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-between items-center mt-4">
            <Button 
              variant="outline" 
              className="hover:bg-purple-100 text-purple-600 border-purple-300"
              onClick={() => setShowFacts(!showFacts)}
            >
              {showFacts ? "Hide Facts" : "Show Facts"}
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-purple-600"
              onClick={() => setLikes(likes + 1)}
            >
              <Heart className={`h-5 w-5 ${likes > 0 ? 'text-red-500 fill-red-500' : 'text-purple-400'}`} />
              <span>{likes}</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-indigo-50 to-violet-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold text-center mb-8 text-purple-800 flex items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PawPrint className="mr-4 h-12 w-12 text-purple-600" />
          Dogs vs Cats
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {animals.map((animal) => (
            <AnimalCard key={animal.type} animal={animal} />
          ))}
        </div>
        <VotesOverTimeChart />
      </div>
    </div>
  );
};

export default Index;