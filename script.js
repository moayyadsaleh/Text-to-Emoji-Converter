function convertText() {
  const inputText = document.getElementById("inputText").value;
  const outputEmoji = document.getElementById("outputEmoji");

  // Simple mapping of words to emojis (customize as needed)
  const emojiMap = {
    happy: "😄", // Represents happiness or joy
    sad: "😢", // Indicates sadness or disappointment
    love: "❤️", // Symbolizes love or affection
    cool: "😎", // Conveys a sense of coolness or confidence
    angry: "😡", // Represents anger or frustration
    laughing: "😂", // Indicates laughter or amusement
    surprised: "😮", // Expresses surprise or shock
    thumbsUp: "👍", // Represents approval or agreement
    thumbsDown: "👎", // Indicates disapproval or disagreement
    heartEyes: "😍", // Conveys deep affection or admiration
    crying: "😭", // Represents intense sadness or crying
    wink: "😉", // Indicates playfulness or a friendly gesture
    fire: "🔥", // Represents something exciting or intense
    star: "⭐", // Symbolizes excellence or achievement
    thinking: "🤔", // Indicates contemplation or consideration
    robot: "🤖", // Represents a robot or technological theme
    rainbow: "🌈", // Symbolizes diversity, peace, and positivity
    party: "🎉", // Represents celebration or excitement
    camera: "📷", // Indicates photography or capturing a moment
    music: "🎵", // Symbolizes music or a good vibe
    book: "📚", // Represents reading or knowledge
    globe: "🌐", // Symbolizes the world or global perspective
    sun: "☀️", // Represents sunshine or a bright day
    moon: "🌙", // Symbolizes the night or bedtime
    coffee: "☕", // Represents coffee or a break
    pizza: "🍕", // Symbolizes pizza or food enjoyment
    flower: "🌸", // Represents flowers or beauty
    lightning: "⚡", // Indicates energy or a sudden idea
    umbrella: "☔", // Represents protection or rainy weather
    gift: "🎁", // Indicates a gift or surprise
    clock: "⏰", // Represents time or urgency
    handshake: "🤝", // Symbolizes a friendly agreement or partnership
    thumbsMiddle: "🖕", // Represents a rude or offensive gesture
    yawn: "😪", // Indicates tiredness or boredom
    faceMask: "😷", // Represents wearing a face mask for health
    brain: "🧠", // Symbolizes intelligence or thinking
    money: "💰", // Represents wealth or financial success
    rainbowFlag: "🏳️‍🌈", // Symbolizes LGBTQ+ pride and inclusivity
    trophy: "🏆", // Represents achievement or winning
    rocket: "🚀", // Symbolizes progress or launching something new
    recycle: "♻️", // Indicates recycling or environmental consciousness
    handshake2: "🤲", // Symbolizes a supportive or caring gesture
    peace: "✌️", // Represents peace or harmony
    caution: "⚠️", // Indicates caution or warning
    noEntry: "🚫", // Represents restricted access or prohibition
    hammer: "🔨", // Symbolizes work or construction
    computer: "💻", // Represents technology or computing
    film: "🎬", // Indicates movies or filmmaking
    soccer: "⚽", // Symbolizes soccer or sports
    airplane: "✈️", // Represents travel or aviation
    anchor: "⚓", // Symbolizes stability or being grounded
    medicalCross: "⚕️", // Represents healthcare or medical attention
    waterWave: "🌊", // Symbolizes water or the ocean
    snowflake: "❄️", // Represents cold weather or winter
    umbrellaRain: "☂️", // Indicates rainy weather with an umbrella
    lightningCloud: "🌩️", // Symbolizes a thunderstorm
    sleepy: "😴", // Indicates sleepiness or drowsiness
    chef: "👨‍🍳", // Represents cooking or a chef
    artist: "🎨", // Symbolizes artistic expression or creativity
    detective: "🕵️‍♂️", // Represents detective work or investigation
    clinkingGlasses: "🥂", // Indicates toasting or celebration
    crystalBall: "🔮", // Symbolizes mystery or foreseeing the future
    magiciansHat: "🎩", // Represents magic or illusion
    skateboard: "🛹", // Symbolizes skateboarding or extreme sports
    joystick: "🕹️", // Represents gaming or playing video games
    headphones: "🎧", // Indicates listening to music or audio
    cameraFlash: "📸", // Represents flash photography
    shoppingCart: "🛒", // Symbolizes shopping or making purchases
    lock: "🔒", // Indicates security or locking something
    key: "🔑", // Represents access or finding a solution
    tools: "🛠️", // Symbolizes tools or manual work
    shield: "🛡️", // Indicates protection or defense
    paperclip: "📎", // Represents attachment or holding things together
    satellite: "🛰️", // Symbolizes satellite communication or space technology
    syringe: "💉", // Represents medical injections or vaccinations
    microscope: "🔬", // Symbolizes scientific research or examination
    loudspeaker: "📢", // Indicates announcements or public speaking
    megaphone: "📣", // Symbolizes amplifying a message
    bullseye: "🎯", // Represents precision or hitting the target
    telephone: "☎️", // Symbolizes communication via phone
    mailbox: "📬", // Represents receiving messages or mail
    package: "📦", // Indicates a delivered package
    runningShoe: "🏃‍♂️", // Symbolizes running or exercise
    weightLifting: "🏋️‍♂️", // Represents weightlifting or strength training
    swimming: "🏊‍♂️", // Symbolizes swimming or aquatic sports
    biking: "🚴‍♂️", // Represents biking or cycling
    dancing: "💃", // Indicates dancing or celebration
    constructionWorker: "👷‍♂️", // Symbolizes construction work
    farmer: "👨‍🌾", // Represents farming or agriculture
    scientist: "👩‍🔬", // Symbolizes scientific research or expertise
    astronaut: "👩‍🚀", // Represents space exploration or an astronaut
    firefighter: "👨‍🚒", // Symbolizes firefighting or emergency response
    pilot: "👨‍✈️", // Represents aviation or being a pilot
    judge: "👨‍⚖️", // Symbolizes the legal profession or justice
    artist2: "👩‍🎨", // Represents artistic expression or creativity
    programmer: "👨‍💻", // Symbolizes programming or software development
    chef2: "👩‍🍳", // Represents cooking or a chef
    nurse: "👩‍⚕️", // Symbolizes healthcare or nursing
    policeOfficer: "👮‍♂️", // Represents law enforcement or policing
    detective2: "🕵️‍♀️", // Symbolizes detective work or investigation
    teacher: "👩‍🏫", // Indicates education or teaching
    student: "👨‍🎓", // Represents a student or learning
    constructionWorker2: "👷‍♀️", // Symbolizes construction work
    factoryWorker: "👩‍🏭", // Represents factory work or manufacturing
    officeWorker: "👨‍💼", // Symbolizes office work or business
    scientist2: "👨‍🔬", // Represents scientific research or expertise
    astronaut2: "👨‍🚀", // Symbolizes space exploration or an astronaut
    policeOfficer2: "👮‍♀️", // Represents law enforcement or policing
    pilot2: "👩‍✈️", // Symbolizes aviation or being a pilot
    judge2: "👩‍⚖️", // Represents the legal profession or justice
    sleeping: "😴", // Indicates sleepiness or bedtime
    starStruck: "🤩", // Represents being starstruck or impressed
    nerdFace: "🤓", // Indicates geekiness or intellectual interest
    zombie: "🧟‍♂️", // Symbolizes a zombie or Halloween
    skull: "💀", // Represents death or danger
    ghost: "👻", // Symbolizes a ghost or Halloween
    alien: "👽", // Represents an alien or outer space
    clappingHands: "👏", // Indicates applause or approval
    prayingHands: "🙏", // Symbolizes prayer or asking for help
    writingHand: "✍️", // Represents writing or taking notes
    raisedHand: "✋", // Indicates raising a hand or agreement
    victoryHand: "✌️", // Symbolizes victory or peace
    OKHand: "👌", // Indicates approval or agreement
    thumbsUp2: "👍", // Represents approval or agreement
    thumbsDown2: "👎", // Indicates disapproval or disagreement
    raisingFist: "✊", // Symbolizes solidarity or resistance
    fistBump: "🤛", // Represents a fist bump or camaraderie
    loveYouGesture: "🤟", // Indicates love or a gesture of affection
    crossedFingers: "🤞", // Symbolizes wishing for luck or good fortune
    handshake3: "🤝", // Symbolizes a friendly agreement or partnership
    huggingFace: "🤗", // Represents a warm hug or affection
    partyPopper: "🎉", // Indicates celebration or excitement
    confettiBall: "🎊", // Symbolizes a festive atmosphere or party
    crossedFlags: "🎌", // Represents a celebration or event
    rainbow2: "🌈", // Symbolizes diversity, peace, and positivity
    palmTree: "🌴", // Represents a tropical location or vacation
    cake: "🎂", // Symbolizes a birthday or celebration
    present: "🎁", // Represents a gift or surprise
    balloon: "🎈", // Symbolizes a party or celebration
    partyHat: "🎉", // Represents a festive mood or celebration
    fireworks: "🎆", // Indicates fireworks or a celebration
    sparkler: "🎇", // Symbolizes a sparkler or festive atmosphere
    moonCake: "🥮", // Represents a moon cake or Mid-Autumn Festival
    lantern: "🏮", // Symbolizes a lantern or celebration
    SantaClaus: "🎅", // Represents Santa Claus or Christmas
    ChristmasTree: "🎄", // Symbolizes a Christmas tree or holiday season
    gift2: "🎁", // Indicates a gift or surprise
    bell: "🔔", // Symbolizes a bell or announcement
    partyFace: "🥳", // Represents a happy and celebratory face
    faceWithMedicalMask: "😷", // Indicates wearing a face mask for health
    faceWithThermometer: "🤒", // Represents illness or having a fever
    faceWithHeadBandage: "🤕", // Indicates injury or being unwell
    nauseatedFace: "🤢", // Represents nausea or feeling sick
    vomitingFace: "🤮", // Indicates vomiting or extreme disgust
    sneezingFace: "🤧", // Symbolizes sneezing or having a cold
    explodingHead: "🤯", // Represents being overwhelmed or mind-blown
    cowboyHatFace: "🤠", // Symbolizes a cowboy or Western theme
    clownFace: "🤡", // Represents a clown or humor
    lyingFace: "🤥", // Indicates dishonesty or telling a white lie
    shushingFace: "🤫", // Symbolizes secrecy or hushing someone
    faceWithHandOverMouth: "🤭", // Indicates giggling or trying to suppress a laugh
    faceWithMonocle: "🧐", // Represents a sophisticated or intellectual look
    nerdFace2: "🤓", // Indicates geekiness or intellectual interest
    smilingFaceWithHalo: "😇", // Symbolizes innocence or being angelic
    zipperMouthFace: "🤐", // Indicates keeping a secret or silence
    moneyMouthFace: "🤑", // Represents wealth or talking about money
    faceWithSymbolsOnMouth: "🤬", // Indicates swearing };
  };

  // Split input text into words and replace with emojis
  const convertedText = inputText
    .split(" ")
    .map((word) => {
      // Convert to lowercase for case-insensitive matching
      const lowerCaseWord = word.toLowerCase();
      return emojiMap[lowerCaseWord] || word;
    })
    .join(" ");

  outputEmoji.textContent = convertedText;
}
