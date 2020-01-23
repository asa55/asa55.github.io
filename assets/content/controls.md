# Robotics and Control Systems

<details>
<summary>
...
</summary>

Control systems are awesome, cross-disciplinary tools that take your systems from "where they are" to "where they ought to be". There is so much buried in that statement, but for now I'll assume the reader has a conceptual understanding of the role of feedback in system design

## I need to get OpenAI Gym in browser, but if I can't get that to work I'll opt for MatterJS

## Modeling Dynamic Systems and System Identification

## Classical Control

The systems appropriately captured by this subset of control theory are few. Classical control lives in a single-input-single-output (SISO) linear world (not time varying, but possibly with some time delay).

All of the above caveats aside this is the branch of control theory most people are comfortable with, and almost across the board in industry I only see people using the "try it and see if it's good enough" approach, and if it's not "bandage it until it is".

To be fair, it is extremely intuitive. Even if you haven't heard of a control system before, if you've ever solved a problem where "your output is here but you want it to be there", you've almost certainly implemented a proportional controller without realizing it in the past.

I'm going to skip the theory on this one, because there is a lot but the only things you really need to know are the following:

* In a classical control system, we get one measurement variable, one actuation variable, one output variable to work with
   * The systems in classical control are modeled by Linear-Time-Invariant Ordinary Differential Equations (LTI ODEs)
   * A system characterized by LTI ODEs can be represented in the frequency domain using transfer functions (in the form of Fourier or Laplace transforms)
   * The output of a system with respect to its input can be decomposed into a transient and steady-state response
   * Fourier transforms capture steady-state response while Fourier transforms capture transient plus steady-state responses
   * You can infer the system transfer function from its magnitude / phase Bode plots (which you can typically derive through testing but it's rarely in the datasheets for your equipment)
   * Even if the system has a "high order", the terms with the slowest time-constants dominate the system response - so reducing the order of the model and still getting great performance is possible
   * If you have the open-loop transfer function for your system, you can easily design a controller that will give you the closed-loop response characteristics you want
* The truth of the matter is that people don't use classical control because it's right, they use it because they understand it and many times it "just works"
   * Don't expect your system to be LTI, it's almost definitely not
   * More insidiously - don't expect your system constraints to be taken into account by a linear control design (these considerations are baked into safety logic you build around a linear controller in case things go out of whack - but this systems engineering consideration is not in any way related to classical control)
   * The optimal controller for a system could be of arbitrary order
      * The slowest time constants dominate
      * Let's reduce this to "the slowest time constant dominates"
      * Let's reduce this to "throw a PID controller on it and see what happens"
         * note that PID controllers have well-defined order (order 2), so we're implicitly saying that we hope this is high enough order to capture the performance we're looking for
         * The number of parameters we can tune (3) are few enough that we can usually tune-by-hand and eye-up the response until we think it's good enough
         * We don't need to have a system model in order to tune a PID controller (even though we could still get one to analyze how well we did with our manual tuning efforts - otherwise we'd never know how well we did). This is why PID control is considered a "model-free" method, even though it's more like a "we didn't take the time to model our assumptions" method
   * A Proportional Integral Derivative (PID) controller can be constructed from phase lead, phase lag, lag-lead, and lead-lag compensators by cascading them together. The inverse is also true, though you won't find many applications with PID controllers cascaded in this way (people use cascaded PID for other reasons)
* The main takeaway should be that if you have a SISO system that is inherently stable, go ahead and try PID. 
   * If your system is not inherently stable and you can't just experiment on the system live without breaking something, then:
      * If you can write up some safety logic that will prevent you from breaking things beyond certain thresholds (e.g. if your thermal system starts overheating, trip the supply voltage and/or take some other fault-protective actions), then write up the fault protection logic and try PID in the safe range
      * There are also some modifications to PID control that help account for practical challenges (derivative kick, integral windup, gain scheduling, bumped or bumpless transfer, gain limiting, and a ton more - none of these are textbook classical control solutions though and certainly not LTI compliant)
* If you can't "just try" PID or if you did and the performance wasn't good enough, you'll probably need to turn to other control system methods
   * How easy is it to model? 
      * Easy --> optimal or nonlinear control
      * Easy but with uncertainties --> robust or adaptive control
      * Difficult --> underactuated control
   * I didn't comment on the fact that classical control lives in an analog world, but the control system implementations are all digital. If you're in an industrial setting and using industrial control equipment (like a PLC or PAC), it probably has PID functionality built-in. If not and you need to implement your own from scratch (like on an embedded processor), you'll probably need to take a look at digital control to make sure you know the impact of how you decide to implement derivatives/integrals/a whole host of fun new numerics and sampling challenges

## Digital Control

I don't have a place for signal processing on this site yet... But for now here is a good place to discuss canonical sampling concerns, ADC/DAC, frequency domain and more

## Robust Control

Robust control is an extension of linear control theory. Even though technically linear multivariable control systems could be considered a separate topic, I'm wrapping it up into robust control just to give the complete look at all things linear beyond classical control.

The discussion on robust control will start with regular MIMO control, pole placement, and then dive into Q-parameterization, quantifying uncertainty, and mu-synthesis.

## Adaptive Control

What do you do when you don't have a model? Adaptive control isn't it, but the good news is that if you have a model where the parameters are linearly separable, then we can use adaptive control to estimate the parameters online, which is pretty cool and extremely useful (even as an alternative method for system identification).

Also, a little less strictly, you can pick among certain reasonable models in standard-form and adapt to the parameters of that model. This is basically just a minor workaround to the situation where you don't have an existing form for a model for your system, but you still want the benefits of adaptive control (namely that performance can be optimized in real-time online while the system is live).

## Optimal Control

* Discrete time optimal control
* Continuous time optimal control
* LQ
* LQR
* Finite horizon
* Infinite horizon
* Pontryagin's Principle, Hamilton-Jacobi-Bellman Equation
* Calculus of Variations, cost, Lagrangian, constraints
* The Riccati Equation and the Algebraic Riccati Equation
* Model Predictive Control (MPC) (Receding Horizon Control)

## Nonlinear Control

* [Models for common nonlinearities](https://abrarhashmi.files.wordpress.com/2017/03/hassan-k-khalil-nonlinear-systems-prentice-hall-2002.pdf) (static friction, Coulomb friction, linear viscous friction, Stribeck effect, relay, saturation, quantization, dead zone)
* Lyapunov stability
* limit cycles
* bifurcation
* chaos
* multiple equilibria
* finite escape time
* gain scheduling
* feedback linearization
* sliding mode control
* integral backstepping
* passivity based control
* Lyapunov redesign
* sliding mode control

## Underactuated Control

I didn't know Russ Tedrake recorded [this class](http://underactuated.mit.edu/underactuated.html) again earlier this year!! I met someone who took this class with him not too long ago, and I've watched the recordings and read the course notes from a few years ago. I'm due for a refresh and can't wait to see how his team has evolved their nonlinear systems software package, Drake. So much to say here, but the learning-based controls are our path to the future for certain

### Trajectory Optimization

</details>
