# Satisar Sharada

Satisar Sharada is an open source Unicode font for the Sharada script. The font is being released under SIL OFL.

The idea behind Satisar is to create a free, usable and functioning Unicode font that renders a reasonable-looking and readable Sharada text. It supports all possible Sanskrit conjuncts upto 5-levels of stacking. The font is still not yet production ready in terms of appearance. However, if you're looking for a free font that just works and renders something resembling Sharada, Satisar should do the job for now.

Here is a rendering of the a sample Unicode text in Satisar Sharada & Noto Sans Sharada.

![Satisar Sample](/satisar-sample.png)
![Noto Sample](/noto-sample.png)

Satisar Sharada does not yet render completely fine in Microsoft applications. The dist feature has some issues and this can result in the  rendered text having some overlapping syllables. This may have to be fixed manually by inserting a space at the appropriate locations.

![Satisar Sample](/winword-sample.png)

If you're looking for a desktop application, try something with Harfbuzz like LibreOffice.

The SVG glyphs were designed by Sunil Mahnoori of the Core Sharada team. The shapes and forms were largely derived from the various learning materials published by the Core Sharada team.

The font was created by importing SVG glyphs into Fontlab and then post-processing it. As such, the glyphs probably show several artefacts of that automated conversion. We have tried as much as possible to fix the auto-converted Bezier curves and normalize the shapes and strokes. But I suppose more could be done to improve on that.

# Demo

There is a simple [demo page](https://virtualvinodh.github.io/satisarsharada/testing.html) that demonstrates the font. It also has an integrated phonetic Keyman keyboard under input to enter text in Sharada using Phonetic and Inscript layouts. The phonetic keyboard layout can be found [here](https://virtualvinodh.github.io/satisarsharada/keyboard.htm)

# Keyboards

You can use [Aksharamukha](https://aksharamukha.appspot.com) to convert text in various format and scripts to Sharada. You can then copy the text from there and set the font to 'Satisar Sharada' in any application that will support Sharada.

If you'd like something simpler aimed at only Sharada try [this](https://satisarsharada.appspot.com). It also has online keyboards to compose in Sharada and links to download offline keyboards.

# Stylistic Set

Due to extensive stacking, Sharada requires increased interline spacing if the text has 3 or more stacked consonants. So, to reduce that we have added a stylistic set (SS01) that uses compacified glyphs to reduce the interline spacing. A sample text is shown below.

![Satisar Sample](/satisar-compact.png)

# To do
1. Normalize stroke widths and character forms in general
2. Redraw below-base forms and above-base forms of conjuncts. Currently, they have been derived by rescaling/modifying the base glyphs (not ideal. But it saved a lot of time)
3. Verifying the forms of certain conjuncts
4. The dist feature needs to be fine-tuned. Currently, it over-generalizes to avoid collision between glyphs but this results in unnecessary spacing even when there is no possiblity of collision.

# Feedback

There are surely a few errors and incorrect forms. If you have find any, please raise a issue in Github.

