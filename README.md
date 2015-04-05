# [lowvision.support](http://://lowvision.support/)
Help improve your website's accessibility by simulating common low vision disorders and color-blindness.


## Motivation
With the Section 508 refresh, This project arose from a desire to have 


The simulation may not always be perfect, but should be close enough for evaluation purposes.

Certain websites (<a rel="external" href="https://www.google.com/">Google</a>, <a rel="external" href="https://www.facebook.com/">Facebook</a>, <a rel="external" href="https://www.flickr.com/">Flickr</a>, etc.) do not allow embedding, so they will not be able to be evaluated. In order to retain interactivity with the submitted website, this simulator uses <abbr title="Scalable Vector Graphics">SVG</abbr> filter technology. Unfortunately, this means that only <a rel="external" href="http://caniuse.com/#feat=svg-filters">newer browsers</a> may be able to use this site effectively.

## Known Issues
- iFrame device density issues (will sometimes load desktop site)
- iFrame obscures low vision condition section on iPhone (possibly related to device density issues above)


## Todo
- [ ] Add support for:
    - [] Hemianopia
    - [] Glaucoma
    - [] Macular Degeneration
    - [] Retinitis Pigmentosa
- [ ] Get instructions working
- [ ] Add support for multiple low vision condition selections using [Chosen](https://harvesthq.github.io/chosen/) 
- [ ] Add favicon info
- [ ] Add Google Analytics


## Contributors
Help is more than welcome! Submit a pull request, or feel free to message me here on [Twitter](https://www.twitter.com/ericwbailey).

## License
A short snippet describing the license (MIT, Apache, etc.).
