const footballImages = [
  // Replace these URLs with real ones later
  "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg", // Cristiano Ronaldo
  "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", // Real Madrid logo
  "https://upload.wikimedia.org/wikipedia/commons/5/5c/Sergio_Ramos_2018.jpg", // Sergio Ramos
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/Roberto_Carlos_2017.jpg", // Roberto Carlos
];

export default function Passion() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold bg-accent-gradient bg-clip-text text-transparent mb-6 text-center">
        My Passion: Football
      </h1>
      <div className="max-w-2xl text-center mb-8">
        <p className="text-lg md:text-xl text-muted-foreground mb-4">
          Football is not just a sport for me—it's my biggest passion. The thrill of the game, the teamwork, and the moments of magic on the pitch inspire me every day.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-4">
          My idol is <span className="font-semibold text-primary">Cristiano Ronaldo</span>, whose dedication and skill are unmatched. My favorite club is <span className="font-semibold text-primary">Real Madrid</span>, a team with a legendary history and countless unforgettable moments.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground">
          On the field, I love playing as a center defender, inspired by legends like <span className="font-semibold text-primary">Sergio Ramos</span> and <span className="font-semibold text-primary">Roberto Carlos</span>—players known for their leadership, strength, and passion.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {footballImages.map((src, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow-lg bg-card flex items-center justify-center p-2">
            <img
              src={src}
              alt="Football passion"
              className="object-cover w-full h-56 md:h-64 rounded-lg border border-accent"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 