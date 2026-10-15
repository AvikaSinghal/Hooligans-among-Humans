/*
 * Publication content lives here so writing can be edited without touching layout code.
 * Articles and personal-log entries are intentionally separate collections.
 * Dates use YYYY-MM-DD. Every article reference is a source that can be checked.
 */
window.PUBLICATION = {
  author: "The writer",
  contactEmail: "hello@example.com", // Replace this with the address you want readers to use.
  categories: [
    "Why We Think",
    "Why We Notice",
    "Why We Do That",
    "How We Become Us",
    "Experiments & Evidence",
    "Human Behaviour in the Wild"
  ],
  articles: [
    {
      slug: "the-gorilla-we-didnt-see",
      title: "The gorilla we didn’t see: attention has a spotlight",
      category: "Why We Notice",
      date: "2026-10-14",
      readMinutes: 5,
      featured: true,
      excerpt: "When we focus on one thing, an unexpected thing can be right in front of us and still go unnoticed. A famous experiment makes that limit surprisingly visible.",
      paragraphs: [
        "Imagine watching a short video of two teams passing a basketball. Your task is simple: count the passes made by one team. In the middle of the action, a person in a gorilla suit walks through the scene. Plenty of viewers concentrating on the count do not report seeing the gorilla.",
        "In their 1999 study, Daniel Simons and Christopher Chabris used this kind of task to examine inattentional blindness: missing an unexpected object while attention is occupied elsewhere. Whether people noticed depended on details of the task, including which team they were asked to track. The result is a memorable demonstration, not a claim that people are generally blind to their surroundings.",
        "The useful idea is that seeing is not simply a matter of having open eyes. What we attend to shapes what reaches awareness. Attention helps us work with limited capacity, but it also means a confident “I would have noticed” can be a shaky prediction.",
        "The experiment took place in a controlled video task, so everyday attention is more complicated. Still, next time you are certain that you would spot every detail, remember the gorilla—and the counting task that made it disappear."
      ],
      references: ["simons-chabris-1999"],
      related: ["a-question-can-change-what-we-remember", "seven-ways-memory-can-mislead"]
    },
    {
      slug: "a-question-can-change-what-we-remember",
      title: "Can one word change what we remember?",
      category: "Why We Think",
      date: "2026-10-08",
      readMinutes: 6,
      featured: true,
      excerpt: "A classic car-crash experiment found that the wording of a question affected estimates. It also offers a careful lesson about memory and suggestion.",
      paragraphs: [
        "After watching a film of a traffic accident, participants in Elizabeth Loftus and John Palmer’s 1974 experiments answered questions about what they had seen. One question changed a single verb: how fast were the cars going when they “smashed” into each other, “hit” each other, or used another word? The verb affected the speed estimates people gave.",
        "In a second experiment, participants asked with the word “smashed” were more likely, a week later, to say they had seen broken glass—even though the film showed none. The authors argued that post-event language can shape reports of memory.",
        "That is a finding about a particular laboratory task. It does not mean every memory is false, or that a question can freely rewrite any event. It does show why wording matters when we ask people to recall details, especially when precision matters.",
        "Memory is useful, but it is not a video file we replay without change. It is a process of reconstructing the past, and sometimes information that arrives later can become part of what feels familiar."
      ],
      references: ["loftus-palmer-1974", "schacter-1999"],
      related: ["the-gorilla-we-didnt-see", "seven-ways-memory-can-mislead"]
    },
    {
      slug: "seven-ways-memory-can-mislead",
      title: "Memory’s seven little ways of going sideways",
      category: "Experiments & Evidence",
      date: "2026-09-29",
      readMinutes: 7,
      featured: false,
      excerpt: "Forgetting and distortion are not just glitches. Daniel Schacter’s influential framework groups common memory slips into seven patterns.",
      paragraphs: [
        "Memory lets us carry experience forward, but it is not designed to preserve every detail with equal strength. In a widely cited 1999 review, psychologist Daniel Schacter organised memory’s common failures into seven “sins”: transience, absent-mindedness, blocking, misattribution, suggestibility, bias, and persistence.",
        "Some are about losing access to information: a memory fades, attention wanders while we are trying to remember, or a name sits stubbornly just out of reach. Others involve remembering with distortion: confusing where a detail came from, absorbing suggestions, or letting current beliefs colour a past event. Persistence describes memories that return when we would rather they did not.",
        "Calling these “sins” can make them sound like personal failings. Schacter’s argument is more interesting: many slips are connected to features that make memory adaptive. Generalising helps us learn; updating helps us use new information. Those same strengths can sometimes blur a detail or leave an old one behind.",
        "The framework is a map for thinking about memory, not a checklist for diagnosing yourself. If a memory matters, it can help to write it down, check independent records, and keep separate what you directly recall from what you learned afterward."
      ],
      references: ["schacter-1999"],
      related: ["a-question-can-change-what-we-remember", "the-gorilla-we-didnt-see"]
    },
    {
      slug: "why-the-first-number-sticks",
      title: "Why the first number can stick in your head",
      category: "Why We Think",
      date: "2026-09-25",
      readMinutes: 5,
      featured: false,
      excerpt: "When we estimate something uncertain, an irrelevant starting number can tug our answer toward it. Psychologists call this anchoring.",
      paragraphs: [
        "Suppose someone asks you to estimate the height of a building, then casually mentions a number first. Even if that number is a guess, it can become a starting point for yours. That pull toward an initial value is known as anchoring.",
        "Amos Tversky and Daniel Kahneman described anchoring as one of several heuristics people use when judging under uncertainty. A heuristic is a mental shortcut: it can make a hard question manageable, while sometimes nudging an answer away from a more considered estimate.",
        "The original paper explores judgment tasks, not every kind of everyday decision. It is a useful reminder to notice where a first number came from before treating it as a neutral reference point. In a practical estimate, one small guardrail is to make an independent guess before looking at a suggested price or someone else’s answer.",
        "That does not magically remove bias. But noticing the anchor gives us a chance to ask whether it belongs in the calculation at all."
      ],
      references: ["tversky-kahneman-1974"],
      related: ["a-question-can-change-what-we-remember", "personality-isnt-set-in-plaster"]
    },
    {
      slug: "habits-in-familiar-places",
      title: "Why familiar routines can run on autopilot",
      category: "Why We Do That",
      date: "2026-09-19",
      readMinutes: 5,
      featured: false,
      excerpt: "Some routines ask surprisingly little of our attention. Research on everyday habits points to the role of repetition and familiar settings.",
      paragraphs: [
        "Have you ever arrived somewhere and realised you barely remember the familiar route? Everyday habits can feel like that: once a behaviour is repeated in a stable context, it may need less deliberate thought to get going.",
        "In two diary studies, Wendy Wood, Jeffrey Quinn, and Deborah Kashy asked participants to report their experiences throughout the day. They found that habitual actions—behaviours performed almost daily in stable contexts—were often accompanied by thoughts about something else. Participants also reported less stress during habitual than non-habitual actions.",
        "That does not mean every repeated action is mindless, or that a habit is impossible to change. The study helps explain why a familiar setting can cue a familiar response: context is part of the pattern, not just the backdrop.",
        "A practical question follows: if a routine keeps happening in one place or at one time, what small change to that cue might create a moment to choose? It is a question to experiment with, not a guaranteed recipe."
      ],
      references: ["wood-quinn-kashy-2002"],
      related: ["social-norms-outside-the-lab", "the-gorilla-we-didnt-see"]
    },
    {
      slug: "personality-isnt-set-in-plaster",
      title: "Is personality set in plaster? Not quite.",
      category: "How We Become Us",
      date: "2026-09-11",
      readMinutes: 6,
      featured: false,
      excerpt: "Personality can be recognisable and still change. A large review of longitudinal studies looked at how average trait levels move across life.",
      paragraphs: [
        "We often talk about personality as if people are either fixed or endlessly reinventing themselves. Longitudinal research offers a more interesting middle ground: traits can show continuity and change at the same time.",
        "Roberts, Walton, and Viechtbauer’s 2006 meta-analysis brought together 92 longitudinal samples to examine average changes in personality traits across the life course. The authors found that some average trait levels shifted with age, with several changes particularly apparent in young adulthood. Different traits followed different patterns.",
        "A group average does not predict one person’s path. Nor does a shift in a questionnaire score mean that someone has become an entirely different person. The study is a reminder that personality development is possible, gradual, and more complex than a fixed label suggests.",
        "So perhaps the useful question is not “Am I this kind of person forever?” but “What patterns tend to show up, and what experiences might be shaping them?” That leaves space for both continuity and change."
      ],
      references: ["roberts-walton-viechtbauer-2006"],
      related: ["habits-in-familiar-places", "seven-ways-memory-can-mislead"]
    },
    {
      slug: "social-norms-outside-the-lab",
      title: "What changes when we think everyone else is doing it?",
      category: "Human Behaviour in the Wild",
      date: "2026-09-02",
      readMinutes: 6,
      featured: false,
      excerpt: "Social norms can nudge behaviour in real settings—but a field study found that the same approach did not work everywhere.",
      paragraphs: [
        "We take cues from other people all the time: what seems normal, what is approved of, what “people like us” tend to do. Researchers call these social norms, and they can shape small public behaviours as well as our private expectations.",
        "A 2024 paper reported five field experiments testing a simple social-norm message across everyday settings. The researchers measured behaviours including paper-towel use, disposable coffee-cup lids, and mask wearing. Their specific message was associated with changes in four of the five experiments; the coffee-cup-lid experiment found no effect.",
        "That mixed result is part of the point. A message that shifts one behaviour in one setting may not travel unchanged to another. The intervention, the people, and the context all matter. One set of field experiments cannot establish a universal rule about social influence.",
        "Human behaviour in the wild is messy precisely because people are responding to other people, places, and reasons all at once. Good research helps us see both the pattern and the boundary around it."
      ],
      references: ["mundt-et-al-2024"],
      related: ["habits-in-familiar-places", "the-gorilla-we-didnt-see"]
    }
  ],
  personalLog: [
    {
      slug: "opening-the-notebook",
      title: "Opening the notebook",
      date: "2026-10-14",
      readMinutes: 2,
      kind: "A first note",
      excerpt: "A small introduction to this space: part psychology explainer, part open notebook about being a person among other people.",
      paragraphs: [
        "Hooligans Among Humans is starting as a place to follow questions about people: how we think, what catches our attention, what we do together, and how a life keeps changing us.",
        "Some entries here will be structured explainers, built around published research and links you can follow. Others will be looser notes from the person behind the site: projects, things I’m reading, current interests, and ordinary life as it happens.",
        "This is the first page of the notebook. The details of the person writing it will grow here over time."
      ]
    }
  ],
  sources: [
    {
      id: "simons-chabris-1999",
      authors: "Simons, D. J., & Chabris, C. F.",
      year: "1999",
      title: "Gorillas in our midst: Sustained inattentional blindness for dynamic events",
      publication: "Perception, 28(9), 1059–1074",
      doi: "10.1068/p281059",
      url: "https://doi.org/10.1068/p281059",
      kind: "Research article"
    },
    {
      id: "loftus-palmer-1974",
      authors: "Loftus, E. F., & Palmer, J. C.",
      year: "1974",
      title: "Reconstruction of automobile destruction: An example of the interaction between language and memory",
      publication: "Journal of Verbal Learning and Verbal Behavior, 13(5), 585–589",
      doi: "10.1016/S0022-5371(74)80011-3",
      url: "https://doi.org/10.1016/S0022-5371(74)80011-3",
      kind: "Research article"
    },
    {
      id: "schacter-1999",
      authors: "Schacter, D. L.",
      year: "1999",
      title: "The seven sins of memory: Insights from psychology and cognitive neuroscience",
      publication: "American Psychologist, 54(3), 182–203",
      doi: "10.1037/0003-066X.54.3.182",
      url: "https://doi.org/10.1037/0003-066X.54.3.182",
      kind: "Review"
    },
    {
      id: "tversky-kahneman-1974",
      authors: "Tversky, A., & Kahneman, D.",
      year: "1974",
      title: "Judgment under uncertainty: Heuristics and biases",
      publication: "Science, 185(4157), 1124–1131",
      doi: "10.1126/science.185.4157.1124",
      url: "https://doi.org/10.1126/science.185.4157.1124",
      kind: "Research article"
    },
    {
      id: "wood-quinn-kashy-2002",
      authors: "Wood, W., Quinn, J. M., & Kashy, D. A.",
      year: "2002",
      title: "Habits in everyday life: Thought, emotion, and action",
      publication: "Journal of Personality and Social Psychology, 83(6), 1281–1297",
      doi: "10.1037/0022-3514.83.6.1281",
      url: "https://doi.org/10.1037/0022-3514.83.6.1281",
      kind: "Diary studies"
    },
    {
      id: "roberts-walton-viechtbauer-2006",
      authors: "Roberts, B. W., Walton, K. E., & Viechtbauer, W.",
      year: "2006",
      title: "Patterns of mean-level change in personality traits across the life course: A meta-analysis of longitudinal studies",
      publication: "Psychological Bulletin, 132(1), 1–25",
      doi: "10.1037/0033-2909.132.1.1",
      url: "https://doi.org/10.1037/0033-2909.132.1.1",
      kind: "Meta-analysis"
    },
    {
      id: "mundt-et-al-2024",
      authors: "Mundt, D., Batzke, M. C. L., Bläsing, T. M., Gomera Deaño, S., & Helfers, A.",
      year: "2024",
      title: "Effectiveness and context dependency of social norm interventions: Five field experiments on nudging pro-environmental and pro-social behavior",
      publication: "Frontiers in Psychology, 15, 1392296",
      doi: "10.3389/fpsyg.2024.1392296",
      url: "https://doi.org/10.3389/fpsyg.2024.1392296",
      kind: "Open-access field experiments"
    }
  ]
};
