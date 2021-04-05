# Satisar Sharada

Satisar Sharada is an open source Unicode font for the Sharada script. The font is being released under SIL OFL.

The idea behind Satisar is to create a free, usable and functioning Unicode font that renders a reasonable-looking and readable Sharada text. It supports all possible Sanskrit conjuncts upto 5-levels of stacking. The font is still not yet production ready in terms of appearance. However, if you're looking for a free font that just works and renders something resembling Sharada, Satisar should do the job for now.

Here is a rendering of the a sample Unicode text in Satisar Sharada & Noto Sans Sharada.

![Satisar Sample](/satisar-sample.png)
![Noto Sample](/noto-sample.png)

For reasons known only to Microsoft, Sharada does not render properly in Windows applications. The GPOS lookups don't work and the resulting rendering is pretty much useless (both with Noto Sans and Satisar). If you're looking for a desktop application try something with Harfbuzz like Libre Office.

The SVG glyphs were designed by Sunil Mahnoori of the Core Sharada team. The shapes and forms were largely derived from the various learning materials published by the Core Sharada team.

# Demo

There is a simple [demo page](https://virtualvinodh.github.io/satisarsharada/testing.html) that demonstrates the font. It also has an integrated phonetic Keyman keyboard under input to enter text in Sharada. The keyboard layout can be found [here](https://virtualvinodh.github.io/satisarsharada/keyboard.htm)

If you'd like something with a better UI try [this](https://satisarsharada.appspot.com).

# To do
1. Normalize stroke widths and character forms in general
2. Redraw below-base forms and above-base forms of conjuncts. Currently, they have been derived by rescaling/modifying the base glyphs (not ideal. But it saved a lot of time)
3. Verifying the forms of certain conjuncts
4. The dist feature needs to be fine-tuned. Currently, it over-generalizes to avoid collision between glyphs but this results in unnecessary spacing even when there is no possiblity of collision.

# Feedback

There are surely a few errors and incorrect forms. If you have find any, please raise a issue in Github.

