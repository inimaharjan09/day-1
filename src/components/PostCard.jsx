import React from "react";

export default function PostCard({ post }) {
  const { imageUrl, title, detail, recipe, ingredients } = post;

  return (
    <div className="w-[300px] space-y-3 shadow-2xl p-3 rounded-lg bg-white">
      <img className="h-[200px] w-full object-cover rounded-lg" src={imageUrl} alt={title} />

      <div className="space-y-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-gray-600">{detail}</p>

        <h2 className="text-md font-semibold mt-2">Recipe:</h2>
        <p className="text-sm text-gray-700">{recipe}</p>

        <h2 className="text-md font-semibold mt-2">Ingredients:</h2>
        <ul className="list-disc list-inside text-gray-700">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
