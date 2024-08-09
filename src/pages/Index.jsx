import React from "react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paw } from "lucide-react";

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
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Discover Dog Breeds</h1>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Paw className="mr-2 h-6 w-6" />
              {breed.name}
            </CardTitle>
            <CardDescription>{breed.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={breed.image} alt={breed.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <p className="text-sm text-gray-600 italic mb-4">Fun Fact: {breed.funFact}</p>
            <div className="flex justify-between">
              <Button onClick={prevBreed} variant="outline">Previous Breed</Button>
              <Button onClick={nextBreed}>Next Breed</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;