
# GitHub

<details>
<summary>
...
</summary>

I have a number of software projects I work on - I try to make it easy for other people to find and run my code.

To that extent, most of the stuff I've worked on recently will run in your browser, even when the code isn't natively compatible with a web browser.

So if you get a chance, please feel free to [explore my contributions on GitHub](https://github.com/asa55?tab=repositories).

Among other things you'll find on there, I have a lot of fun with this and that. Of late I'm especially proud of [this blog post my buddies and I put up on Make Magazine's website](https://github.com/asa55/HelloRich) (which quickly got taken down! guessing it was flagged as off topic, but I'm guessing they didn't realize that behind the goofy cartoonized edu-tainment is a legit and comprehensive hardware/software tutorial)

![Hello Rich!](https://raw.githubusercontent.com/asa55/HelloRich/master/slides/Slide00.png)

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

![me](https://raw.githubusercontent.com/asa55/asa55.github.io/master/blog/assets/images/sol.png)

ASA 1/10/2020
</details>

# Notes from a 3D Printer Build

<details>
<summary>
...
</summary>

A few days ago I got an off-brand version of an Ender 3 in the mail. Thanks Creality - it's a great product. But I'm realizing now that the folks who came up with Ender 3 are in some legal battles with other people taking their idea for open-sourced hardware and up-selling on Amazon. I hope that my purchase actually helped the original equipment manufacturer (OEM) in some way. The box and printer I got are branded as Ender 3 and included a few additional Creality branded parts (like a glass build plate), so I believe the OEM still made money on the sale (to me via Creality).

I followed the assembly instructions that came with the machine and it went smoothly. But this machine has overwhelmingly positive and active community support, so I still found some great [wikis](https://github.com/rlogiacco/3DP/wiki) / [blogs](https://all3dp.com/1/creality-ender-3-pro-3d-printer-review/) / [video tutorials](https://www.youtube.com/playlist?list=PLPb81Z-Cw4oheuYfZy9GHORyQOY0aDgod) that helped me get mine running smoothly.

I appreciated Creality shipping their custom slicer - it had all the community-recommended magic numbers set as default, but it didn't work when I went to print. Uninstalled and went for the latest version of Cura - now I'm up and running. I love that there are add-ons in Cura to let me open .glb files - the same as I used for my recent AR project! I've heard people had challenges leveling the bed - I'm not having any such issues as yet, but I have been leveling manually without using the leveling wizard tool.

Here's a time-lapse gif of my build progress as I went along. Next time I make a time-lapse gif, I think I'll increase the frequency of photo-ops.

![gif of the 3d printer being built](https://raw.githubusercontent.com/asa55/asa55.github.io/master/blog/assets/images/printerbuild.gif)

ASA 1/18/2020
</details>

# Robotics Warmup

<details>
<summary>
...
</summary>

A friend and I were talking over a few ideas to vet my printer and shake off the 3D modeling rust in an effort to start making some more serious robotics builds.

We spitballed a few ideas for basic force multiplying devices and useful hardware to supplement the prints. I got a hold of assorted springs, gaskets, M3 - M5 machine screws and bolts, and some 3mm pin stock.

Eventually we came up with the idea of comparing gripping devices for some of our designs while we consider the pros and cons of different approaches.

The first print turned out pretty well - the workflow to make it was (1) draft a blueprint by hand with key dimensions (2) construct 3D model in Blender, export as .stl (3) import .stl file into Ultimaker Cura to generate a printable .gcode file (4) drop the file onto an SD card, transfer to the printer and let it rip. The most time consuming aspect of this was the print itself which took a little less than 2 hours.

![gif of the gripper device](https://raw.githubusercontent.com/asa55/asa55.github.io/master/blog/assets/images/gripper.gif)

ASA 1/28/2020
</details>
