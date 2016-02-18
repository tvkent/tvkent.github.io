---
layout: page
title: "Research"
description: "This is what I do"
header-img: "img/screen.jpg"
---

### Recombination Evolution

<div class="left_figure"><figure>
	<img src="/img/cap2.jpg" alt="Capsella" style="float: left" width="250" hspace="25" vspace="25" />
	<figcaption>
		<font size="2"><i>Capsella bursa-pastoris</i></font>
	</figcaption>
</figure></div>

I'm currently working on a project exploring the genomic landscape of recombination hotspots across species of Brassicaceae.
Meiotic recombination is believed to be the main benefit of sexual reproduction, and has been described by G. Ledyard Stebbins and others as the primary source shaping evolution.
Recombination tends to localize to certain genomic regions, either targeted by _cis_-regulatory mechanisms or in regions of open chromatin, called hotspots, in which the average recombination rate is many times higher than the background rate.
Despite being a fundmental source of variation, we know surprisingly little, especially in plants, about how and why rates of recombination vary within and between species.
This lack of knowledge is partly due to the variation in rates and regulatory mechanisms among highly studied model speices, but is also due to the recent ability of mapping recombination at a fine scale.
The now tractable method of estimating population-scaled recombination rates along genomes using local linkage disequilibrium is enabling a much broader look at how these rates evolve in different species, where hotspots occur, and how hotspots are mediated.

I'm using LD-based estimation to map recombination rates in several species of the genera _Arabidopsis_ and _Capsella_, in order to gain understanding into if and how these rates have evolved between species and genera.
These genera also enable me to examine recombination patterns and rates as they may have changed in response to shifts in mating system, which is common in plants.
With fine-scale maps, I can also ask how hotspots in these species may be mediated in comparison to other well-studied systems.

___

### Linked Selection
<div class="right_figure"><figure>
        <img src="/img/linkedselection.png" alt="linked" style="float: right" width="400" hspace="25" vspace="25" />
        <figcaption>
                <font size="2">Reduction in diversity near a selected site (from <a href="http://cooplab.github.io/popgen-notes/#the-effect-of-linked-selection-on-patterns-of-neutral-diversity">Graham Coop</a>)</font>
        </figcaption>
</figure></div>

When genomic sites undergo positive or negative selection, the neutral sites surrounding them experience linked selection (known as selective sweeps and background selection, respectively).
This results in a loss of neutral diversity near selected sites, with impacts depending on the strength of selection and the local recombination rate.
Although many studies have investigated either selective sweeps or background selection, it has been difficult to investigate their joint impacts.
The genome-wide reduction in diversity due to linked selection can not only impact the "evolutionary potential" of species, ignorance of its effects can greatly influence estimation of summary statistics.
During my Ph.D., I plan to use the fine-scale recombination maps from the above project to begin an investigation of the genomic landscape of the effects of linked selection on neutral diversity, using recent advances in estimation [methods](http://http://arxiv.org/pdf/1408.5461.pdf).

___

### Introgression

<div class="left_figure"><figure>
        <img src="/img/rice.png" alt="Rice" style="float: left" width="450" hspace="25" vspace="25" />
        <figcaption>
                <font size="2">Nucleotide diversity along a chromosome of rice</font>
        </figcaption>
</figure></div>

In collaboration with [Jeffrey Ross-Ibarra](http://rilab.org) and [Eric Fuchs](https://www.researchgate.net/profile/Eric_Fuchs), I'm investigating potential crop-wild introgression in the endangered wild rice _Oryza glumaepatula_ in Costa Rica.
Crop-wild introgression is common in different species and can influence [local adaptation](http://journals.plos.org/plosgenetics/article?id=10.1371/journal.pgen.1003477) and can cause hybrid swarms leading to wild species [extinction](http://www.ncbi.nlm.nih.gov/pubmed/16892969).
Because wild species are an important source of genetic diversity for breeding crop species, it is important that we understand the potential risks they face from anthropogenic interference.

For this study, we collected wild individuals from populations in allopatry and sympatry with domesticated rice fields.
We used whole genome sequencing and [ANGSD-wrapper](https://peerj.com/preprints/1472/) to calculate genome-wide diversity and admixture statistics, and performed differential gene expression analyses to determine the extent and effects of introgression.
This work is on-going. 
