
import CodingCard from "./CodingCard";

const CodingGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
      {codingProfiles.map((profile) => (
        <CodingCard
          key={profile.id}
          profile={profile}
        />
      ))}
    </div>
  );
};

export default CodingGrid;