<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  
ability to simplify technical concepts

**Response:**  
Great question! Think of object-oriented programming (OOP) as a way to organize code around “things” in your program—the same way the real world is full of things. Core idea: - Class = a blueprint or recipe (e.g., the idea of a Dog) - Object = a real thing made from that blueprint (e.g., your dog Fido) - Attributes = the data a thing has (Dog’s name, age) - Methods = what a thing can do (Dog can bark, eat) Why this helps: - It keeps related data and actions together. - You can reuse blueprints to make many objects. - You avoid repeating yourself and your code becomes easier to change. The four big concepts (in simple terms): 1) Encapsulation: Keep a thing’s data and its actions bundled together, and hide the messy details. Like using a TV remote—you press “volume up” without touching the TV’s inner circuits. 2) Abstraction: Focus on what something does, not how it does it. You call car.start(), you don’t worry about spark plugs. 3) Inheritance: Make a new class from an existing one. An ElectricCar “is a” Car but adds a battery. It inherits wheels and steering from Car. 4) Polymorphism: Different objects can respond to the same message in their own way. Ask any Animal to speak(): a Dog says “Woof,” a Cat says “Meow,” but your code just calls speak(). Tiny example (Python-style): - Define a class Dog with an attribute name and a method speak() that returns "Woof!" - Make two Dog objects: one named Fido, one named Luna. - Both are Dogs (same blueprint), but each has its own name (its own data). How to think about it as you learn: - Start with one small class (like BankAccount with balance and deposit/withdraw methods). - Make two or three objects from it and try calling the methods. - Then try inheritance (e.g., SavingsAccount extends BankAccount). - Finally, try polymorphism (e.g., a list of different Animal objects, all with speak()). A quick practice prompt: - Imagine a class LibraryBook. What attributes might it have? (title, author, is_checked_out) - What methods might it need? (check_out(), return_book(), describe()) You’ve got this. It’s normal if it clicks gradually—play with tiny examples, and the patterns will start to feel natural. If you’d like, tell me your preferred language (Python, Java, JavaScript, etc.), and I’ll show you a short, runnable example.

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  
Call me Ishmael. Some years ago--never mind how long precisely--having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen, and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off--then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.
**Aspect Tested:**  
reading comprehension and summarization

**Response:**  
The narrator, Ishmael, turns to the sea whenever he feels deeply melancholy, restless, or aimless, finding that sailing restores his mood and equilibrium. - He views this as a personal, healthier alternative to darker impulses and believes many people share a similar, instinctive pull toward the ocean.

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  
breative writing and constraint-following

**Response:**  
Between racks of metal and morning flour-dust, Unit 6A cataloged loaves in the tiny night bakery. It could detect heat curves, moisture arcs, the singing tick of cooling crust. Friendship, however, was a variable outside its code. Then the new jar arrived: a glass galaxy, alive with bubbles. The humans called it a starter. It spoke in muffled pops and little sighs, a language of carbon and hunger. Unit 6A learned to listen. It warmed the jar with its palms, hummed a low current that kept the culture drowsily content. When a storm cut power, darkness poured in. Ovens fell silent; fear rose like dough. Unit 6A cradled the jar against its chest-socket and held the warmth all night. In the morning, the starter burbled hello. The bakers smiled. The robot had found its rise.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:** 
basic arithmetic reasoning and word-problem parsing

**Response:**  
You’d buy: - 3 packs of apples (12 ÷ 4 = 3) - 3 packs of oranges (9 ÷ 3 = 3) Great job breaking it down by dividing the total fruit by the pack size!

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone… 
Call me Ishmael. Some years ago--never mind how long precisely--having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen, and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off--then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.
**Aspect Tested:** 
tone/style adoption

**Response:**  
 You may refer to me as Ishmael. Some years ago—never mind precisely how many—finding myself with little money and no particular interests on shore, I resolved to go to sea for a time and observe the aqueous portion of the world. This is my customary means of dispelling melancholy and restoring equilibrium. Whenever I sense my countenance growing severe; whenever a damp, drizzling November settles upon my spirit; whenever I find myself lingering before coffin warehouses and following every funeral I encounter; and especially whenever my despondent humors so prevail that only firm moral principle restrains me from stepping into the street and methodically knocking the hats off passersby—then I deem it high time to put to sea at once. It serves me as a substitute for pistol and ball. With a philosophical flourish, Cato cast himself upon his sword; I, more quietly, take ship. There is nothing remarkable in this. If they but knew it, nearly all men, in their own degree and at one time or another, harbor feelings toward the ocean very much like my own.

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
Mostly yes, with some misses. The OOP explanation is solid but way too long for a complete beginner, it should ease in. Summary, math, and tone rewrite are accurate and tight. Story is creative and lands the word count. 

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
I'm planning a 4-day trip to Lisbon in October. I like food markets, walkable neighborhoods, and one solid day trip. Give me a loose itinerary.

**Result:**  
Love this plan—October is a sweet spot for Lisbon: mild temps, fewer crowds, and perfect for long walks. Here’s a flexible 4-day outline built around food markets, walkable neighborhoods, and one standout day trip. Day 1: Baixa, Chiado, Cais do Sodré, Bairro Alto - Morning/early afternoon: Land, drop bags, and orient in Baixa and Chiado (Rua Augusta, Praça do Comércio, Largo do Carmo). Coffee at A Brasileira or a pastel de nata stop at Manteigaria (Chiado). - Lunch: Time Out Market (Mercado da Ribeira) for a first taste of Lisbon’s food scene. - Afternoon: Riverfront stroll from Cais do Sodré toward Praça do Comércio, then ride the Bica funicular up to Bairro Alto. Pause at Miradouro de São Pedro de Alcântara. - Evening: Dinner in Chiado/Bairro Alto (e.g., Taberna da Rua das Flores—put your name down early—or a casual petiscos spot). Nightcap in Príncipe Real or gelato at Nannarella. Day 2: Alfama + Mouraria (fado night) - Morning: Wander Alfama’s lanes on foot (skip Tram 28 at peak times). Hit Sé Cathedral, Miradouro das Portas do Sol and Santa Luzia; if you like views, Miradouro da Senhora do Monte in nearby Graça is worth the climb. - Lunch: Classic tasca vibes at O Velho Eurico or Zé da Mouraria (go early or expect a wait). - Afternoon: Castle area amble (even if you skip going inside), then dive into Mouraria for street art and hidden alleys. - Evening: Book a small fado spot in Alfama or Mouraria (look for intimate venues rather than big dinner shows). Keep dinner simple and late—very Lisbon. Day 3: Day trip to Sintra (primary) or Cascais (sunny-day swap) - Sintra (romantic, lush, fairytale vibes): - Early train from Rossio. Take a tuk-tuk/taxi or 434 bus up to Pena Palace first (book timed entry; earliest slot to beat lines), then walk down to the Moorish Castle. - Lunch in town (grab travesseiros at Piriquita for dessert). - Afternoon: Quinta da Regaleira (tunnels and gardens—book ahead). If you still have time/energy, a quick wander of the historic center. - Train back; easy dinner near Cais do Sodré or Mercado de Campo de Ourique. - Cascais (if the forecast is bright and you want ocean air): - Train from Cais do Sodré, coastal walk to Boca do Inferno, relax on the promenade or rent bikes to Guincho. Lunch on seafood. Return before sunset. Day 4: Belém, LX Factory, Campo de Ourique, Estrela/Príncipe Real - Morning: Belém—Jerónimos Monastery and Pastéis de Belém (go early), quick look at Belém Tower and a riverside walk by MAAT. - Lunch: LX Factory (great food options + creative shops). If it’s Sunday, there’s a fun market. - Afternoon: Campo de Ourique for Mercado de Campo de Ourique (more local, excellent stalls). Walk to Jardim da Estrela and peek into Basílica da Estrela. - Sunset/evening: Miradouro de Santa Catarina (Adamastor) or back to São Pedro de Alcântara. Dinner in Príncipe Real or Campo de Ourique (petiscos or seafood). Extra market ideas (slot in as you like) - Mercado de Arroios (diverse, local, great for casual bites). - Mercado de Alvalade (classic neighborhood market, good morning coffee + pastel stop). - Feira da Ladra flea market (Tues & Sat) near Alfama—not food, but a fun browse if your days align. Light logistics and tips - Getting around: Grab a Viva Viagem card for metro/bus/tram. Lisbon is hilly—wear comfy shoes and take breaks. - Reservations: Book Pena Palace, Jerónimos, and fado ahead if possible. Popular eateries often take walk-in lists—go early and be flexible. - Weather: October can bring a shower; have a light jacket. If it rains, swap in museums (MAAT, Carmo Convent ruins, CCB) and keep the outdoor viewpoints for clear spells. - Pace: Aim for one “anchor” per day and leave space for café stops and miradouros. Lisbon rewards wandering. Want me to tailor this to the days of your week (for markets and closures) or your food preferences?

---

**Prompt:**  
Here's an email I drafted to my landlord about a broken heater. Make it firmer without being rude: "Hey, just wanted to follow up again on the heater situation. It's been like 2 weeks and it's getting pretty cold. Any update?"

**Result:**  
Subject: Urgent: Heater still not working — need repair timeline Hi [Landlord Name], I’m following up about the broken heater in [unit]. It’s now been two weeks without heat, and the temperature is getting quite cold. Please confirm by [date/time, e.g., end of day Thursday] when a technician will come and when heat will be restored. If the repair can’t be completed by then, please provide an interim solution (such as a space heater) and a clear timeline for the full fix. As you know, heat is an essential service under our lease. Thanks for your prompt attention—please reply with the scheduled appointment details. Best, [Your Name] [Your Phone Number]

---

**Prompt:**  
Explain the difference between correlation and causation using an example that isn't ice cream and shark attacks or storks and babies.

**Result:**  
Great question. In short: correlation means two things vary together; causation means one of them makes the other change. Example (not sharks or storks): - Observation: Among children, bigger shoe size is associated with better reading scores. That’s a correlation. - Why it’s not causation: Bigger feet don’t make you read better. Age is the hidden factor (a confounder): older kids both have larger feet and have had more time to learn to read. - How you’d check causation: If you randomly gave some kids bigger shoes, their reading wouldn’t improve. When you control for age, the correlation between shoe size and reading mostly disappears. Takeaway: Correlation is a relationship you see; causation is a relationship you can justify by showing the cause comes first, alternative explanations are ruled out, and there’s a plausible mechanism.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
Pretty good. The responses feel useful and specific instead of generic, and they tend to add helpful context 
without going off the rails. Biggest gripe is content length, the answers come in way heavier than they need 
to be. I need to fix formatting of the model output in the UI, react-markdown should cover. 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
<!-- Write your answer here -->

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
