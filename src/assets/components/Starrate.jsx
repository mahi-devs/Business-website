import React from 'react';
import { Star } from 'lucide-react';

 const Starrate = () => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}
export default Starrate;