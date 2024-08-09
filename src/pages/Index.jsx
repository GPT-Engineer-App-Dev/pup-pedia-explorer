import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Cat } from "lucide-react";

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
    ]
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
    ]
  }
];

const AnimalCard = ({ animal }) => (
  <Card className="w-full h-full border-blue-200 shadow-lg flex flex-col">
    <CardHeader className="bg-blue-100 flex-grow">
      <CardTitle className="text-2xl flex items-center text-blue-700">
        {animal.type === "dog" ? <Dog className="mr-2 h-6 w-6 text-blue-600" /> : <Cat className="mr-2 h-6 w-6 text-blue-600" />}
        {animal.name}
      </CardTitle>
      <CardDescription className="text-blue-600">{animal.description}</CardDescription>
    </CardHeader>
    <CardContent className="bg-white flex-grow flex flex-col justify-between">
      <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <div>
        <h3 className="font-bold text-blue-700 mb-2">Fun Facts:</h3>
        <ul className="list-disc list-inside text-sm text-blue-600">
          {animal.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Dogs vs Cats</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {animals.map((animal) => (
            <AnimalCard key={animal.type} animal={animal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;