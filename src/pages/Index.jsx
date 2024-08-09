import React from "react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog } from "lucide-react";

const dogBreeds = [
  {
    name: "Labrador Retriever",
    description: "Friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg",
    funFact: "Labradors have a water-resistant coat and webbed toes, making them excellent swimmers!"
  },
  {
    name: "German Shepherd",
    description: "Smart, confident, courageous, and steady; a true dog lover's dog. German Shepherds can be as gentle as a lamb with family and as fearsome as a wolf to protect their loved ones.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg",
    funFact: "German Shepherds were originally bred to herd sheep and their name in German is 'Deutscher Schäferhund', which means German Shepherd Dog."
  },
  {
    name: "Golden Retriever",
    description: "Intelligent, friendly, and devoted. Golden Retrievers are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg",
    funFact: "The Golden Retriever's coat has two layers - a thick, water-repellent outer layer, and a soft undercoat that keeps them warm in chilly waters."
  }
];

const Index = () => {
  const [currentBreed, setCurrentBreed] = useState(0);

  const nextBreed = () => {
    setCurrentBreed((prev) => (prev + 1) % dogBreeds.length);
  };

  const prevBreed = () => {
    setCurrentBreed((prev) => (prev - 1 + dogBreeds.length) % dogBreeds.length);
  };

  const breed = dogBreeds[currentBreed];

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Discover Dog Breeds</h1>
        <Card className="w-full border-blue-200 shadow-lg">
          <CardHeader className="bg-blue-100">
            <CardTitle className="text-2xl flex items-center text-blue-700">
              <Dog className="mr-2 h-6 w-6 text-blue-600" />
              {breed.name}
            </CardTitle>
            <CardDescription className="text-blue-600">{breed.description}</CardDescription>
          </CardHeader>
          <CardContent className="bg-white">
            <img src={breed.image} alt={breed.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <p className="text-sm text-blue-600 italic mb-4">Fun Fact: {breed.funFact}</p>
            <div className="flex justify-between">
              <Button onClick={prevBreed} variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">Previous Breed</Button>
              <Button onClick={nextBreed} className="bg-blue-500 text-white hover:bg-blue-600">Next Breed</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;