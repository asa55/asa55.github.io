
# GitHub

<details>
<summary>
...
</summary>

I have a number of software projects I work on - I try to make it easy for other people to find and run my code.

To that extent, most of the stuff I've worked on recently will run in your browser, even when the code isn't natively compatible with a web browser.

So if you get a chance, please feel free to [explore my contributions on GitHub](https://github.com/asa55?tab=repositories).

Among other things you'll find on there, I have a lot of fun with this and that. Of late I'm especially proud of [this blog post my buddies and I put up on Make Magazine's website](https://github.com/asa55/HelloRich) (which quickly got taken down! guessing it was flagged as off topic, but I'm guessing they didn't realize that behind the goofy cartoonized edu-tainment is a legit and comprehensive hardware/software tutorial)

![Hello Rich!](https://github.com/asa55/HelloRich/blob/master/slides/Slide00.png)

ASA 1/1/2020
</details>

# Augmented Reality with Web Components

<details>
<summary>
...
</summary>

Web components are great, aren't they? If you do web development professionally or as a hobby, you've probably come across new features known as web components that make life a lot easier.

I'll tell a quick story to motivate [this project](https://asa55.github.io/fun-with-scene-viewer/)

My fiancee along with some friends and I were playing Dungeons and Dragons, which for the uninitiated is easily described as a game of imagination. We have a lot of fun building the world around the game by creating art for the characters and the make-believe world we've devised from scratch in which the game occurs.

In keeping with this notion of creating art to visualize our world, along our imaginary journey we acquired a special item (kind of like a compass) that will help our team navigate around an underground cavern in search of goblins. 

For fun, I wanted to mock-up this item as a 3D model, and use augmented reality capabilities (that are now common across many mobile phones) to visualize this item on the table where we play the game.

This seemed like a simple goal - I knew that the software to model a room using only the camera feed was out there, and that the only thing I really needed to identify was a tool that would let me drop a 3D model into.

I dug around for a while and found a variety of paid apps and subscriptions and all manners of things that required cloud services and internet connectivity. This went completely against my gut feeling that this should be an easy and inexpensive problem to solve.

Finally I realized that there was a recent addition to the web (thanks to web components) referred to as Model Viewer that lets you do the trick using your browser. It was awesome, it was easy, it was minimal, it was free, it was exactly what I needed.

The basic idea is super simple:
1. Make your 3D model (I used Blender and exported as .glb)
2. Host your model on your website (I used GitHub) and include it via html using the right tags
3. The AR functionality "just works"!

It's a great tool and the project took only an afternoon to complete. If you're viewing this page on your mobile device, [check out the model at this link](https://asa55.github.io/fun-with-scene-viewer/) to see the 3D model, then click the AR function button in the bottom right corner of the 3D model to activate AR mode and see it in the room you're currently in via your camera feed!
