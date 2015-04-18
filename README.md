# [lowvision.support](http://://lowvision.support/)
Help improve your website's accessibility by simulating common low vision disorders and color-blindness.


## Motivation
With the upcoming [Section 508](https://en.wikipedia.org/wiki/Section_508_Amendment_to_the_Rehabilitation_Act_of_1973) [refresh](http://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh), there has been increased attention put towards blindness and low vision disabilities. Although color-blindness is a subject that is pretty well understood at this point, a lot of the existing tools that simulate low vision conditions are (unfortunately, somewhat ironically) inaccessible, many having been built on depreciated technologies or are simply no longer available online.

This project arose from a desire to address that gap by making a free, future-friendly testing tool that was built mobile-first. I wanted to make something that I would personally be comfortable using, as well as challenging myself to improve my JS skills and try out some emerging web technologies.


## Technology

Low vision conditions are simulated in realtime using SVG filters. This approach removes the need for an blocking overlay to apply effects to, and allows the viewed site to retain its interactivity. While the simulations are not always going to be 100% accurate, I feel they're close enough for evaluation purposes. Data for the filters were sourced from [this archived page](http://web.archive.org/web/20081014161121/http://www.colorjack.com/labs/colormatrix/).

Since SVG filters require a [modern browser to use](http://caniuse.com/#feat=svg-filters), this allowed the opportunity to experiment with using Flexbox, calc, rem, and vh/vw units. jQuery is also utilized.

### Acknowledgements
This site uses [scottrabin](https://github.com/scottrabin)'s excellent [is.js library](https://arasatasaygin.github.io/is.js/)


## Known Issues
- [ ] Certain websites forbid embedding in an iFrame - this is by design and there's not much I can do about this one, unfortunately
- [ ] iFrame device density issues (will sometimes load desktop site)
- [ ] iFrame obscures low vision condition section on iPhone (possibly related to device density issues above)
- [ ] Site chokes on URLs containing a hash (`#`) symbol


## To Do
- [ ] Add support for:
    - [ ] Hemianopia
    - [ ] Glaucoma
    - [ ] Macular Degeneration
    - [ ] Retinitis Pigmentosa
- [ ] Add instructions/explanation modal
- [ ] Add support for multiple selections (i.e. cataracts w/Protanopia) using [Chosen](https://harvesthq.github.io/chosen/) 
- [ ] More visually emphasized focus styles
- [ ] Add Google Analytics


## Contributors
Help or suggestions are more than welcome! Submit an [issue](https://github.com/ericwbailey/lowvision/issues) or a [pull request](https://github.com/ericwbailey/lowvision/pulls), or feel free to message me here or on [Twitter](https://www.twitter.com/ericwbailey).


## License
```
The MIT License

Copyright (c) 2015 Eric Bailey. http://lowvision.support/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
