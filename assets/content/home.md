# Welcome to my Blog!

![me](https://raw.githubusercontent.com/asa55/asa55.github.io/master/assets/images/me.png)
### Alex Augenstein: Engineer, Scientist, Entrepreneur

## This site is in active development. In a sense this is for professional demonstration, but the content of this site is a compilation of my own personal reference notes I actually use and come back to. I hope you find this resource insightful as you browse around, and if you have any suggestions please feel free to [share your thoughts with me on GitHub](https://github.com/asa55/asa55.github.io/issues)

## A note on the implementation for this site:
### The navbar on the left scrolls separately from the content window (where you're reading now) - depending on your screen size you might be able to find more content this way
### The content is stored in markdown (.md) files. This is rendered nicely in your browser thanks to zero-md
### Markdown supports inline html, which I will use liberally as I update this site. For example, here is a cart-pole demo (that you can interact by clicking and dragging) thanks to the MatterJS physics engine
#### It's just a skeleton right now but soon I'll add some control-system smarts to it and drop it in the real-time control section of this site...

<div id="cartpole"></div>

## A little bit about me
### Work
* Founder, [Neurobi Company](https://neurobi.com/), 2019 - pres.
* Engineer, Naval Nuclear Laboratory, 2015 - pres.
* Research Assistant, University of Pittsburgh, Fall 2014
* Research Assistant, University of Zwickau (Germany), Summer 2014
* Intern, Harris Corporation, Spring - Summer 2012
* More on [LinkedIn](https://www.linkedin.com/in/alex-augenstein)

### Education
* PhD Candidate, Electrical and Computer Engineering, University of Pittsburgh, 2019 - pres.
* M.S., Electrical and Computer Engineering, University of Pittsburgh, 2016 - 2019
   * Thesis title 'Feudal Networks for Hierarchical Reinforcement Learning Revisited'
   * Transferred in ME67500 for credit from Purdue University, a distance-enabled graduate course in robust multivariable control
* B.S., Electrical Engineering, University of Pittsburgh, 2011 - 2015
   * Minor in mathematics
   * Concentration in signal processing and (analog & digital) communication systems

### Other
* I enjoyed robotics club and ham radio club in college - my callsign is KD8UYM though you won't catch me on the airwaves any time soon (just sold my most recent rig a few months ago)
* I also loved 3D printing - past-tense because my last one was well-loved. I used it for all kinds of things including a self-study course in grad school for printing the brunt of an Arduino-controlled inverted pendulum. Naturally it caught fire at the last minute - I improvised with some other materials I had laying around and got it to work, but haven't bought a new one since then (but it's a buyer's market right now so you never know - the price has come down by a factor of 5 since I got my first one)
* I'm a big fan of open source code. [Find me on GitHub](https://github.com/asa55) just for fun or to see the source code for this site

## Thanks for stopping by! Please check back soon for updates

<script>
  var engine = Matter.Engine.create(),
  world = engine.world;
  var render = Matter.Render.create({
  element: document.getElementById('cartpole'),
  engine: engine,
  options: {
    width: 800,
    height: 600,
    wireframes: false,
    background: '#aaaaaa'
  }
  });
  var trackCategory = 0x0001,
  cartCategory = 0x0002,
  pendulumCategory = 0x0004;

  Matter.Render.run(render);
  var runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);

  Matter.World.add(world, [
  Matter.Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
  Matter.Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
  Matter.Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
  Matter.Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  ]);

  myTrack = Matter.Bodies.rectangle(400, 300, 800, 50, {isStatic:true, collisionFilter: { mask:   trackCategory } });
  myCart = Matter.Composites.car(395, 200, 200, 39, 20, {frictionAir:0});
  myCart.bodies[0].collisionFilter.category = cartCategory;
  myCart.bodies[1].render.visible = false;
  myCart.bodies[2].render.visible = false;
  myPendulum = Matter.Bodies.circle(400, 0, 10, { collisionFilter: { mask: pendulumCategory },
    frictionAir: 0, })

  var constraint = Matter.Constraint.create({
  bodyA: myCart.bodies[0],
  pointA: { x: 0, y: 0 },
  bodyB: myPendulum,
  pointB: { x: 0, y: 0 }
  });

  Matter.World.add(world, [myTrack, myCart, myPendulum, constraint] )

  var mouse = Matter.Mouse.create(render.canvas),
  mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
  });

  Matter.World.add(world, mouseConstraint);
  render.mouse = mouse;
  mouseConstraint.collisionFilter.mask = cartCategory;
</script>
