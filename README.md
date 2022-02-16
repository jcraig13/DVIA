# The Illusion of Alcohol

## by Juliet Craig for PGDV5100 Data Visualization and Information Aesthetics at Parsons School of Design

The Illusion of Alcohol is a project meant to take a closer look into the alcohol industry. I was inspired by vintage alcohol advertising posters and what they represent. The data set I used took data from every country, helping look into the culture that surrounds drinking. The parameters included how much alcohol was consumed, average annual income, suicide rates, and employment rates.

## Data Wrangling

![image](https://user-images.githubusercontent.com/48970337/154178720-93735ad2-1b9e-42e7-8c99-111aebbe3f97.png)

I want to incorporate some ambiguity to this visualization. A lot of the data is ambiguous, especially with cultural norms and I want to be able to capture this feeling. I think that in one culture, alcohol may be seen as a treat, where some see it as a daily comfort. This dataset allows us to look into how other countries handle alcohol.

## Initial Sketches

![image](https://user-images.githubusercontent.com/48970337/154178774-24940111-01e5-438e-9bf6-e8f3e52ee7dc.png)

This sketch is the first iteration of my project. I wanted to include a conglomerate of bar graphs to showcase every country and their discrepancies. This evolved into the right hand side of the paper where each variable was dissected with all the countries together. After some thought I noticed that the independent variable, alcohol consumption needed to be on the y-axis.

![image](https://user-images.githubusercontent.com/48970337/154178819-8a0ffd4d-1e90-4eaf-af75-c4b96176a5f6.png)

Next, I wanted to make this data more abstract and designed more uniquely. I wanted to have beer bottles represent each country and compare alcohol consumption this way. I designed these mockups in Figma, but decided against this model. I felt I could not offer more than the two dimensions in this design, opting for the scatterplots.

## Research

Alcohol has been in human culture since Neolithic times (4000 BC). It is one thing that is ALMOST universal. According to Social Issues Research Center many cultures perceive alcohol consumption differently. Many Mediterranean and wet cultures view alcohol as peaceful and harmonious, often leading to less alcohol related problems. Whereas, cold, temperate, dry climates such as UK and Scandinavia view alcohol as a violent and anti-social behavior, also leading to more alcohol related issues. Some cultures vary and shift with the times, but there is often a large variance.

![image](https://user-images.githubusercontent.com/48970337/154178882-df7a9919-9a38-4a51-af11-4225a6aa5e20.png)

I chose a scatter plot because I think there is going to be somewhat of a correlation between the two variables, but mostly because I think every country is so wildly different.

I used Excel to calculate the regression line for each scatter plot.

![image](https://user-images.githubusercontent.com/48970337/154178939-c8b750fc-4f03-4b71-9c68-979c936448ec.png)

Using the y=mx+b equation given to me by Excel, I calculated my own points to create a regression line in d3. Plugging in X1 as 0 and X2 and the maximum X value. This process was done for both pairs of coordinates on each scatter plot.

```
y = 0.2762x + 4.0394
y = 0.2762(0) + 4.0394
y = 0 + 4.0394
y = 4.0394
X1,Y1 = (0, 4.0394)
```
![image](https://user-images.githubusercontent.com/48970337/154178970-61843f75-27eb-41d2-b39a-8c79366b71f4.png)

I believe that this visualization could be shown to mental health professionals. This is a good opportunity to de-stigmatize alcohol abuse and the effects of mental and economic health. In a way I believe I am creating new questions and allowing people to learn. 

As I mentioned previously, I used my style guide and vintage alcohol posters to convey the feeling of the data. All of these poster used are clickable images to take you to the source image found on Google Images. I did a deeper dive into Smirnoff advertising because they really caught my eye. 

To me, Smirnoff has changed their advertising strategies much more significantly over time than any other brand of alcohol. I saw many ad campaigns that had interesting slogans such as, "The Effect is Shattering". This slogan was tied to many phrases such as, "Accountancy was my life until I discovered Smirnoff" and "I was the mainstay of the Public Library until I discovered Smirnoff". These posters play with the insecurities of most people. The idea that "no one wants to be lame or a nerd". Smirnoff is selling you suaveness and a new more appealing lifestyle.

![image](https://user-images.githubusercontent.com/48970337/154179001-805e4937-ced5-4816-82b0-8c6c8074ef23.png)

## Style Guide

![image](https://user-images.githubusercontent.com/48970337/154179041-e5749691-d1d8-41fb-989e-33b63c0970af.png)

![image](https://user-images.githubusercontent.com/48970337/154179072-81f8472f-f3f6-45b0-ab15-f640581fadaa.png)

![image](https://user-images.githubusercontent.com/48970337/154179098-d71b0cf5-e21c-44d1-99c4-04262e42c6bc.png)

![image](https://user-images.githubusercontent.com/48970337/154179135-7694def3-ea71-4e61-ad60-f50a5158509d.png)

## Programs Used

* HTML/CSS
* d3.js
* Figma
* Excel

Active site: https://jcraig13.github.io/DVIA/Alcohol_Illusion/

### References
- [https://www.kaggle.com/sansuthi/alcohol-consumption](https://www.kaggle.com/sansuthi/alcohol-consumption)
- [https://pubs.niaaa.nih.gov/publications/10report/chap07c.pdf](https://pubs.niaaa.nih.gov/publications/10report/chap07c.pdf)
- [https://www.thespiritsbusiness.com/2019/02/smirnoff-a-brand-history/](https://www.thespiritsbusiness.com/2019/02/smirnoff-a-brand-history/)
- [https://www.drugabuse.gov/about-nida/noras-blog/2020/04/addressing-stigma-surrounds-addiction](https://www.drugabuse.gov/about-nida/noras-blog/2020/04/addressing-stigma-surrounds-addiction)
- [http://www.sirc.org/publik/drinking3.html](http://www.sirc.org/publik/drinking3.html)
- [https://www.d3-graph-gallery.com/graph/scatter_tooltip.html](https://www.d3-graph-gallery.com/graph/scatter_tooltip.html)
