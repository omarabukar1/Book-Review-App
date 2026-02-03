// books.js
// This file powers the whole site.
// Make sure it stays valid JavaScript (commas, quotes, etc.)

const BOOKS = [
    {
      id: "atomic-habits",
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-improvement",
      rating: 4,
  
      // Used on the Books page (books.html)
      status: "Finished",
      dateFinished: "2026-01-20",
      short: "Simple habits, done daily, can change everything over time.",
  
      // Used on the Review page (review.html)
      summary: `Atomic Habits is about how small actions shape who you become over time.
  The book explains that habits are not about motivation, but about systems and environment.
  Tiny improvements, done consistently, lead to big change.`,
  
      reflection: `What stood out to me most is the idea that habits are a reflection of identity.
  Instead of saying “I want to do this”, the book pushes you to think “this is who I am”.
  
  I realised that waiting for motivation does not work long term.
  What works is setting things up so the right choice is the easy choice.
  
  I’m applying this by focusing on small systems instead of big goals.
  Showing up consistently matters more than intensity.
  
  I think this works best when habits are simple, realistic,
  and tied to daily routines so it stays sustainable.`
    },
  
    {
      id: "the-alchemist",
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      rating: 5,
  
      // Used on the Books page (books.html)
      status: "Finished",
      dateFinished: "2026-01-10",
      short: "A simple story with a strong message about purpose and patience.",
  
      // Used on the Review page (review.html)
      summary: `The Alchemist follows a young shepherd named Santiago who travels in search of a treasure.
  Along the way, he learns about purpose, patience, and listening to himself.
  The story is simple, but it focuses on bigger ideas about life and direction.`,
  
      reflection: `What I took from this book is the idea of trusting the journey, even when the path is unclear.
  Not everything makes sense at the start, but moving forward still matters.
  
  It made me think about how often people stop because they want certainty first.
  This book suggests growth happens while you’re already moving.
  
  I apply this by focusing less on perfect plans and more on consistent action.
  As long as I’m learning and improving, I’m going the right way.
  
  I think it’s best read slowly, with reflection, not rushed for answers.`
    }

   ,{
        id: "the-autobiography-of-malcolm-x",
        title: "The Autobiography of Malcolm X",
        author: "Malcolm X (as told to Alex Haley)",
        genre: "Biography / History",
        rating: 5,
      
        // Used on the Books page (books.html)
        status: "Finished",
        dateFinished: "2025-03-01",
        short: "A powerful life story about change, identity, and speaking with purpose.",
      
        // Used on the Review page (review.html)
        summary: `This book tells the life story of Malcolm X, from his early childhood and struggles,
      to his time caught up in crime, and then the turning point where he begins to change.
      
      A big part of the story is about identity. He explains how he became “Malcolm X”,
      why he rejected the name he was given, and how he started questioning the world around him.
      You also see his growth as a public speaker and leader, and how his thinking evolves over time.
      
      The book covers major themes like racism in America, education through self-learning,
      discipline, and the idea that a person can completely transform their life.
      It doesn’t hide the uncomfortable parts -it shows the mistakes, the lessons,
      and the mindset shifts that made him who he became.`,
      
        reflection: `What I respected most is how honest the book is about change.
      It’s not written like someone was perfect from day one - it shows a real transformation.
      
      The biggest lesson for me is that your past doesn’t have to define you.
      He rebuilt himself through discipline, reading, and taking his own growth seriously.
      That part hit me because it proves that learning isn’t only “school”- it’s what you do
      when nobody is forcing you.
      
      I also took away how important it is to think for yourself.
      His views changed over time, and he didn’t pretend he was the same person forever.
      That taught me that growth includes updating your mindset when you learn more.
      
      How I’m applying it:
      I want to be more intentional about what I feed my mind.
      Less scrolling, more reading and learning with purpose.
      I also want to build stronger self-discipline in my routines,
      because consistency changes your identity over time.
      
      I think this book should be applied with reflection, not just emotion.
      It’s not only about history - it’s about what happens when someone decides to take control
      of their life, their thinking, and their direction.`
      }
      
  ];
  