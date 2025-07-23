document.addEventListener('DOMContentLoaded', function () {
    const songItems = document.querySelectorAll('.song-item');
    const lyricsContent = document.querySelector('.lyrics-content');

    const lyrics = {
        'Welcome to New York': {
            title: 'Welcome to New York',
            writer: 'Written by Taylor Swift & Ryan Tedder',
            content: [
                {
                    type: 'Verse 1',
                    text: `Walking through a crowd, the village is aglow

Kaleidoscope of loud heartbeats under coats

Everybody here wanted something more

Searching for a sound we hadn't heard before

And it said`
                },
                {
                    type: 'Chorus',
                    text: `Welcome to New York

It's been waiting for you

Welcome to New York

Welcome to New York

Welcome to New York

It's been waiting for you

Welcome to New York

Welcome to New York`
                },
                {
                    type: 'Verse 2',
                    text: `Like any great love, it keeps you guessing

Like any real love, it's ever-changing

Like any true love, it drives you crazy

But you know you wouldn't change anything, anything, anything`
                },
                {
                    type: 'Pre-Chorus',
                    text: `It's a new soundtrack

I could dance to this beat, beat, forevermore

The lights are so bright

But they never blind me, me

(Welcome to New York)

It's been waiting for you`
                },
                {
                    type: 'Chorus',
                    text: `Welcome to New York

It's been waiting for you

Welcome to New York

Welcome to New York

Welcome to New York

It's been waiting for you

Welcome to New York

Welcome to New York`
                },
                {
                    type: 'Bridge',
                    text: `When we first dropped our bags on apartment floors

Took our broken hearts, put them in a drawer

Everybody here was someone else before

And you can want who you want

Boys and boys and girls and girls`
                },
                {
                    type: 'Pre-Chorus',
                    text: `It's a new soundtrack

I could dance to this beat, beat, forevermore

The lights are so bright

But they never blind me, me

(Welcome to New York)

It's been waiting for you`
                },
                {
                    type: 'Chorus',
                    text: `Welcome to New York

It's been waiting for you

Welcome to New York

Welcome to New York

Welcome to New York

It's been waiting for you

Welcome to New York

Welcome to New York`
                },
                {
                    type: 'Outro',
                    text: `Welcome to New York

It's been waiting for you

Welcome to New York

Welcome to New York...`
                }
            ]
        },
        'Blank Space': {
            title: 'Blank Space',
            writer: 'Written by Taylor Swift, Max Martin, Shellback',
            content: [
                {
                    type: 'Verse 1',
                    text: `Nice to meet you, where you been?

I could show you incredible things

Magic, madness, heaven, sin

Saw you there and I thought

"Oh my God, look at that face

You look like my next mistake

Love's a game, want to play?"`
                },
                {
                    type: 'Pre-Chorus',
                    text: `So it's gonna be forever

Or it's gonna go down in flames

You can tell me when it's over

If the high was worth the pain

Got a long list of ex-lovers

They'll tell you I'm insane

'Cause you know I love the players

And you love the game`
                },
                {
                    type: 'Chorus',
                    text: `'Cause we're young and we're reckless

We'll take this way too far

It'll leave you breathless

Or with a nasty scar

Got a long list of ex-lovers

They'll tell you I'm insane

But I've got a blank space, baby

And I'll write your name`
                },
                {
                    type: 'Verse 2',
                    text: `Cherry lips, crystal skies

I could show you incredible things

Stolen kisses, pretty lies

You're the king, baby, I'm your queen

Find out what you want

Be that girl for a month

Wait, the worst is yet to come, oh no`
                },
                {
                    type: 'Pre-Chorus',
                    text: `So it's gonna be forever

Or it's gonna go down in flames

You can tell me when it's over

If the high was worth the pain

Got a long list of ex-lovers

They'll tell you I'm insane

'Cause you know I love the players

And you love the game`
                },
                {
                    type: 'Chorus',
                    text: `'Cause we're young and we're reckless

We'll take this way too far

It'll leave you breathless

Or with a nasty scar

Got a long list of ex-lovers

They'll tell you I'm insane

But I've got a blank space, baby

And I'll write your name`
                },
                {
                    type: 'Bridge',
                    text: `Boys only want love if it's torture

Don't say I didn't say, I didn't warn ya

Boys only want love if it's torture

Don't say I didn't say, I didn't warn ya`
                },
                {
                    type: 'Chorus',
                    text: `'Cause we're young and we're reckless

We'll take this way too far

It'll leave you breathless

Or with a nasty scar

Got a long list of ex-lovers

They'll tell you I'm insane

But I've got a blank space, baby`
                },
                {
                    type: 'Outro',
                    text: `And I'll write your name...`
                }
            ]
        },
        'Style': {
            title: 'Style',
            writer: 'Written by Taylor Swift, Max Martin, Shellback, Ali Payami',
            content: [
                {
                    type: 'Verse 1',
                    text: `Midnight

You come and pick me up, no headlights

A long drive

Could end in burning flames or paradise

Fade into view, oh

It's been a while since I have even heard from you

(Heard from you)`
                },
                {
                    type: 'Pre-Chorus',
                    text: `And I should just tell you to leave 'cause I

Know exactly where it leads but I

Watch us go 'round and 'round each time`
                },
                {
                    type: 'Chorus',
                    text: `You got that James Dean daydream look in your eye

And I got that red lip classic thing that you like

And when we go crashing down, we come back every time

'Cause we never go out of style

We never go out of style

You got that long hair, slicked back, white t-shirt

And I got that good girl faith and a tight little skirt

And when we go crashing down, we come back every time

'Cause we never go out of style

We never go out of style`
                },
                {
                    type: 'Verse 2',
                    text: `So it goes

He can't keep his wild eyes on the road, mmm

Takes me home

The lights are off, he's taking off his coat, mmm, yeah

I say, "I heard, oh

That you've been out and about with some other girl"

Some other girl`
                },
                {
                    type: 'Pre-Chorus',
                    text: `And I should just tell you to leave 'cause I

Know exactly where it leads but I

Watch us go 'round and 'round each time`
                },
                {
                    type: 'Chorus',
                    text: `You got that James Dean daydream look in your eye

And I got that red lip classic thing that you like

And when we go crashing down, we come back every time

'Cause we never go out of style

We never go out of style

You got that long hair, slicked back, white t-shirt

And I got that good girl faith and a tight little skirt

And when we go crashing down, we come back every time

'Cause we never go out of style

We never go out of style`
                },
                {
                    type: 'Bridge',
                    text: `Take me home

Just take me home

Yeah, just take me home

Oh-oh, oh-oh`
                },
                {
                    type: 'Chorus',
                    text: `You got that James Dean daydream look in your eye

And I got that red lip classic thing that you like

And when we go crashing down, we come back every time

'Cause we never go out of style

We never go out of style

You got that long hair, slicked back, white t-shirt

And I got that good girl faith and a tight little skirt

And when we go crashing down, we come back every time

'Cause we never go out of style

We never go out of style`
                }
            ]
        },
        'Out of The Woods': {
            title: 'Out of The Woods',
            writer: 'Written by Taylor Swift & Jack Antonoff',
            content: [
                {
                    type: 'Verse 1',
                    text: `Looking at it now

It all seems so simple

We were lying on your couch

I remember

You took a Polaroid of us

Then discovered (Then discovered)

The rest of the world was black and white

But we were in screaming color`
                },
                {
                    type: 'Pre-Chorus',
                    text: `And I remember thinking

Are we out of the woods yet?,

are we out of the woods yet?,

are we out of the woods yet?, 

are we out of the woods?`
                },
                {
                    type: 'Chorus',
                    text: `Are we in the clear yet?,
                
                are we in the clear yet?,
                
                are we in the clear yet?,
                
                in the clear yet, good

Are we out of the woods yet?, 

are we out of the woods yet?, 

are we out of the woods yet?, 

are we out of the woods?

Are we in the clear yet?, 

are we in the clear yet?, 

are we in the clear yet?, 

in the clear yet, good`
                },
                {
                    type: 'Verse 2',
                    text: `Looking at it now

Last December (Last December)

We were built to fall apart

Then fall back together (Back together)

Oh, your necklace hanging from my neck, 

the night we couldn't quite forget when we decided,

we decided

To move the furniture so we could dance

Baby, like we stood a chance

Two paper airplanes flying, flying, flying`
                },
                {
                    type: 'Pre-Chorus',
                    text: `And I remember thinking

Are we out of the woods yet?,

are we out of the woods yet?, 

are we out of the woods yet?, 

are we out of the woods?`
                },
                {
                    type: 'Chorus',
                    text: `Are we in the clear yet?, 
                
                are we in the clear yet?, 
                
                are we in the clear yet?, 
                
                in the clear yet, good

Are we out of the woods yet?, 

are we out of the woods yet?, 

are we out of the woods yet?,

are we out of the woods?

Are we in the clear yet?,

are we in the clear yet?, 

are we in the clear yet?, 

in the clear yet, good`
                },
                {
                    type: 'Bridge',
                    text: `Are out of the woods?

Remember when you hit the brakes too soon?

Twenty stitches in a hospital room

When you started crying, baby I did too

But when the sun came up I was looking at you

Remember when we couldn't take the heat?

I walked out, I said, "I'm setting you free"

But the monsters turned out to be just trees

When the sun came up you were looking at me`
                },
                {
                    type: 'Pre-Chorus',
                    text: `You were looking at me, oh

You were looking at me

Are we out of the woods yet?,

are we out of the woods yet?, 

are we out of the woods yet?, 

are we out of the woods?`
                },
                {
                    type: 'Chorus',
                    text: `I remember

Are we in the clear yet?,

are we in the clear yet?, 

are we in the clear yet?, 

in the clear yet, good

Oh, I remember

Are we out of the woods yet?, 

are we out of the woods yet?, 

are we out of the woods yet?, 

are we out of the woods?

Are we in the clear yet?,

are we in the clear yet?, 

are we in the clear yet?, 

in the clear yet, good`
                },
                {
                    type: 'Chorus',
                    text: `Are we out of the woods yet?, 
                
                are we out of the woods yet?, 
                
                are we out of the woods yet?,
                
                are we out of the woods?

Are we in the clear yet?, 

are we in the clear yet?, 

are we in the clear yet?,

in the clear yet, good`
                },
                {
                    type: 'Chorus',
                    text: `Are we out of the woods yet?, 
                
                are we out of the woods yet?, 
                
                are we out of the woods yet?,
                
                are we out of the woods?

Are we in the clear yet?,

are we in the clear yet?,

are we in the clear yet?, 

in the clear yet, good`
                },
                {
                    type: 'Chorus',
                    text: `Are we out of the woods yet?, 
                
                are we out of the woods yet?,
                
                are we out of the woods yet?, 
                
                are we out of the woods?

Are we in the clear yet?, 

are we in the clear yet?,

are we in the clear yet?, 

in the clear yet, good`
                },
                {
                    type: 'Chorus',
                    text: `Are we out of the woods yet?, 
                
                are we out of the woods yet?, 
                
                are we out of the woods yet?,
                
                are we out of the woods?

Are we in the clear yet?, 

are we in the clear yet?, 

are we in the clear yet?, 

in the clear yet, good`
                }
            ]
        },
        'All You Had To Do Was Stay': {
            title: 'All You Had To Do Was Stay',
            writer: 'Written by Taylor Swift & Max Martin',
            content: [
                {
                    type: 'Verse 1',
                    text: `People like you always want back the love they gave away

And people like me wanna believe you when you say you've changed

The more I think about it now, the less I know

All I know is that you drove us off the road`
                },
                {
                    type: 'Pre-Chorus',
                    text: `Stay`
                },
                {
                    type: 'Chorus',
                    text: `Hey, all you had to do was stay

Had me in the palm of your hand

Then why'd you have to go and lock me out when I let you in?

Hey, now you say you want it back

Now that it's just too late

Well, it could've been easy

All you had to do was (stay)

All you had to do was (stay)

All you had to do was (stay)

All you had to do was (stay)

All you had to do was stay`
                },
                {
                    type: 'Verse 2',
                    text: `Here you are now, calling me up, but I don't know what to say

I've been picking up the pieces of the mess you made

People like you always want back the love they pushed aside

But people like me are gone forever when you say goodbye`
                },
                {
                    type: 'Chorus',
                    text: `Hey, all you had to do was stay

Had me in the palm of your hand

Then why'd you have to go and lock me out when I let you in?

Hey, now you say you want it back

Now that it's just too late

Well, it could've been easy

All you had to do was (stay)

All you had to do was (stay)

All you had to do was (stay)

All you had to do was (stay, stay, stay, stay, stay)`
                },
                {
                    type: 'Bridge',
                    text: `Let me remind you

This was what you wanted (oh, oh, oh-oh-oh)

You ended it

You were all I wanted (oh, oh, oh-oh-oh)

But not like this

Not like this

Not like this

Oh, all you had to do was-`
                },
                {
                    type: 'Chorus',
                    text: `Hey, all you had to do was stay

Had me in the palm of your hand

Then why'd you have to go and lock me out when I let you in?

Hey, now you say you want it back

Now that it's just too late

Well, it could've been easy

All you had to do was (stay)`
                },
                {
                    type: 'Chorus',
                    text: `Hey, all you had to do was stay

Had me in the palm of your hand

Then why'd you have to go and lock me out when I let you in?

Hey, now you say you want it back

Now that it's just too late

Well, it could've been easy (all you had to do was stay)

All you had to do was (stay)

All you had to do was (stay) oh

All you had to do was (stay) ooh

All you had to do was (stay)`
                }
            ]
        },
        'Shake It Off': {
            title: 'Shake It Off',
            writer: 'Written by Taylor Swift, Max Martin & Shellback',
            content: [
                {
                    type: 'Verse 1',
                    text: `I stay out too late

Got nothin' in my brain

That's what people say, mm-mm

That's what people say, mm-mm

I go on too many dates (Haha)

But I can't make them stay

At least, that's what people say, mm-mm

That's what people say, mm-mm`
                },
                {
                    type: 'Pre-Chorus',
                    text: `But I keep cruisin'

Can't stop, won't stop movin'

It's like I got this music in my mind

Sayin', "It's gonna be alright"`
                },
                {
                    type: 'Chorus',
                    text: `'Cause the players gonna play, play, play, play, play

And the haters gonna hate, hate, hate, hate, hate

Baby, I'm just gonna shake, shake, shake, shake, shake

I shake it off, I shake it off

Heartbreakers gonna break, break, break, break, break

And the fakers gonna fake, fake, fake, fake, fake

Baby, I'm just gonna shake, shake, shake, shake, shake

I shake it off, I shake it off`
                },
                {
                    type: 'Verse 2',
                    text: `I never miss a beat

I'm lightnin' on my feet

And that's what they don't see, mm-mm

That's what they don't see, mm-mm

I'm dancin' on my own (Dancin' on my own)

I make the moves up as I go (Moves up as I go)

And that's what they don't know, mm-mm

That's what they don't know, mm-mm`
                },
                {
                    type: 'Pre-Chorus',
                    text: `But I keep cruisin'

Can't stop, won't stop groovin'

It's like I got this music in my mind

Sayin', "It's gonna be alright"`
                },
                {
                    type: 'Chorus',
                    text: `'Cause the players gonna play, play, play, play, play

And the haters gonna hate, hate, hate, hate, hate

Baby, I'm just gonna shake, shake, shake, shake, shake

I shake it off, I shake it off

Heartbreakers gonna break, break, break, break, break

And the fakers gonna fake, fake, fake, fake, fake

Baby, I'm just gonna shake, shake, shake, shake, shake

I shake it off, I shake it off`
                },
                {
                    type: 'Post-Chorus',
                    text: `I shake it off, I shake it off

I, I, I shake it off, I shake it off

I, I, I shake it off, I shake it off

I, I, I shake it off, I shake it off`
                },
                {
                    type: 'Interlude',
                    text: `Hey, hey, hey

Just think, while you've been gettin' down and out about the liars

And the dirty, dirty cheats of the world

You could've been gettin' down

To this sick beat`
                },
                {
                    type: 'Bridge',
                    text: `My ex-man brought his new girlfriend

She's like, "Oh my God," but I'm just gonna shake

And to the fella over there with the hella good hair

Won't you come on over, baby?

We can shake, shake, shake

Yeah, oh-oh, oh`
                },
                {
                    type: 'Chorus',
                    text: `'Cause the players gonna play, play, play, play, play

And the haters gonna hate, hate, hate, hate, hate (Haters gonna hate)

Baby, I'm just gonna shake, shake, shake, shake, shake

I shake it off, I shake it off (Ha)

Heartbreakers gonna break, break, break, break, break (Mmm)

And the fakers gonna fake, fake, fake, fake, fake (They fake and fake and fake)

Baby, I'm just gonna shake, shake, shake, shake, shake

I shake it off, I shake it off (I, I)`
                },
                {
                    type: 'Post-Chorus',
                    text: `I shake it off, I shake it off

I, I, I shake it off, I shake it off

I, I, I shake it off, I shake it off

I, I, I shake it off (Yeah), I shake it off

I shake it off, I shake it off

I, I, I shake it off, I shake it off (You got to)

I, I, I shake it off, I shake it off

I, I, I shake it off, I shake it off`
                }
            ]
        },
        'I Wish You Would': {
            title: 'I Wish You Would',
            writer: 'Written by Taylor Swift & Jack Antonoff',
            content: [
                {
                    type: 'Verse 1',
                    text: `It's 2 A.M. in your car

Windows down, I pass my street

The memories start

You say it's in the past

And drive straight ahead

You think I'm gonna hate you now

'Cause you still don't know what I never said`
                },
                {
                    type: 'Chorus',
                    text: `I wish you would come back

Wish I'd never hung up the phone like I did

I wish you knew that

I'd never forget you as long as I'd live

And I wish you were right here, right now

It's all good

I wish you would`
                },
                {
                    type: 'Verse 2',
                    text: `It's 2 A.M. in my room

Headlights pass the window pane

I think of you

We're a crooked love

In a straight line down

Makes you wanna run and hide

Then it makes you turn right back around`
                },
                {
                    type: 'Chorus',
                    text: `I wish you would come back

Wish I'd never hung up the phone like I did

I wish you knew that

I'd never forget you as long as I'd live

And I wish you were right here, right now

It's all good

I wish you would`
                },
                {
                    type: 'Bridge',
                    text: `I wish we could go back

And remember what we were fighting for

Wish you knew that

I miss you too much to be mad anymore

And I wish you were right here, right now

It's all good

I wish you would`
                },
                {
                    type: 'Breakdown',
                    text: `I I I I, I I I wish, I wish, I

I I I I, I I I wish, I wish, I

I I I I, I I I wish, I wish, I

You always knew how to push my buttons (I I I I, I I I wish, I wish, I)

You gave me everything and nothing (I I I I, I I I wish, I wish, I)

This mad, mad love makes you come rushing (I I I I, I I I wish, I wish, I)

Stand back where you stood (I I I I, I I I wish, I wish, I)

I wish you would, I wish you would (I I I I, I I I wish, I wish, I)

I wish you would, I wish you would (I I I I, I I I wish, I wish, I)

(I wish you would, I wish you would) (I wish, I wish, I)`
                },
                {
                    type: 'Verse 3',
                    text: `2 A.M., here we are

See your face

Hear my voice in the dark

We're a crooked love

In a straight line down

Guess you wanna run and hide

But it made us turn right back around`
                },
                {
                    type: 'Chorus',
                    text: `I wish you would come back

Wish I'd never hung up the phone like I did

I wish you knew that

I'd never forget you as long as I'd live

And I wish you were right here, right now

It's all good

I wish you would`
                },
                {
                    type: 'Chorus',
                    text: `I wish you would come back

Wish I'd never hung up the phone like I did

I wish you knew that

I'd never forget you as long as I'd live

And I wish you were right here, right now

It's all good

I wish you would`
                },
                {
                    type: 'Bridge',
                    text: `I wish we could go back

And remember what we were fighting for

Wish you knew that

I miss you too much to be mad anymore

And I wish you were right here, right now

It's all good

I wish you would`
                },
                {
                    type: 'Breakdown',
                    text: `You always knew how to push my buttons (I I I I, I I I wish, I wish, I)

You gave me everything and nothing (I I I I, I I I wish, I wish, I)

This mad, mad love makes you come rushing (I I I I, I I I wish, I wish, I)

Stand back where you stood (I I I I, I I I wish, I wish, I)

I wish you would, I wish you would (I I I I, I I I wish, I wish, I)

I wish you would, I wish you would (I I I I, I I I wish, I wish, I)

(I wish you would, I wish you would)

I wish you would, I wish you would (I I I I, I I I wish, I wish, I)

(I wish you would, I wish you would) (I wish I, I wish I)

I I I I, I I I wish, I wish, I

I I I I, I I I wish, I wish, I (I wish you would)`
                }
            ]
        },
        'Bad Blood': {
            title: 'Bad Blood',
            writer: 'Written by Taylor Swift, Max Martin & Shellback',
            content: [
                {
                    type: 'Chorus',
                    text: `'Cause, baby, now we got bad blood

You know it used to be mad love

So take a look what you've done

'Cause baby, now we got bad blood (hey!)

Now we got problems

And I don't think we can solve 'em

You made a really deep cut

And, baby, now we got bad blood (hey!)`
                },
                {
                    type: 'Verse 1',
                    text: `Did you have to do this?

I was thinking that you could be trusted

Did you have to ruin

What was shiny? Now it's all rusted

Did you have to hit me

Where I'm weak? Baby, I couldn't breathe

And rub it in so deep

Salt in the wound like you're laughing right at me

Oh, it's so sad to think about the good times

You and I`
                },
                {
                    type: 'Chorus',
                    text: `'Cause, baby, now we got bad blood

You know it used to be mad love

So take a look what you've done

'Cause baby, now we got bad blood (hey!)

Now we got problems

And I don't think we can solve 'em

You made a really deep cut

And, baby, now we got bad blood (hey!)`
                },
                {
                    type: 'Chorus',
                    text: `'Cause, baby, now we got bad blood

You know it used to be mad love

So take a look what you've done

'Cause baby, now we got bad blood (hey!)

Now we got problems

And I don't think we can solve 'em

You made a really deep cut

And, baby, now we got bad blood (hey!)`
                },
                {
                    type: 'Verse 2',
                    text: `Did you think we'd be fine?

Still got scars on my back from your knife

So don't think it's in the past

These kind of wounds, they last and they last

Now did you think it all through?

All these things will catch up to you

And time can heal, but this won't

So, if you're coming my way, just don't

Oh, it's so sad to think about the good times

You and I`
                },
                {
                    type: 'Chorus',
                    text: `'Cause, baby, now we got bad blood

You know it used to be mad love

So take a look what you've done

'Cause, baby, now we got bad blood (hey!)

Now we got problems

And I don't think we can solve 'em

You made a really deep cut

And, baby, now we got bad blood (hey!)`
                },
                {
                    type: 'Bridge',
                    text: `Band-aids don't fix bullet holes

You say sorry just for show

If you live like that, you live with ghosts (ghosts)

Band-aids don't fix bullet holes (hey!)

You say sorry just for show (hey!)

If you live like that, you live with ghosts (hey!)

Hm, if you love like that, blood runs cold`
                },
                {
                    type: 'Chorus',
                    text: `'Cause, baby, now we got bad blood

You know it used to be mad love

So take a look what you've done

'Cause, baby, now we got bad blood (hey!)

Now we got problems

And I don't think we can solve 'em (think we can solve 'em)

You made a really deep cut

And, baby, now we got bad blood (hey!)`
                },
                {
                    type: 'Chorus',
                    text: `'Cause, baby, now we got bad blood

You know it used to be mad love

So take a look what you've done (look what you've done)

'Cause baby, now we got bad blood (hey!)

Now we got problems

And I don't think we can solve 'em

You made a really deep cut

And, baby, now we got bad blood (hey!)`
                },
                {
                    type: 'Chorus',
                    text: `'Cause, baby, now we got bad blood

You know it used to be mad love

So take a look what you've done

'Cause baby, now we got bad blood (hey!)

Now we got problems

And I don't think we can solve 'em

You made a really deep cut

And, baby, now we got bad blood (hey!)`
                }
            ]
        },
        'Wildest Dreams': {
            title: 'Wildest Dreams',
            writer: 'Written by Taylor Swift, Max Martin & Shellback',
            content: [
                {
                    type: 'Verse 1',
                    text: `He said, "Let's get out of this town

Drive out of the city, away from the crowds"

I thought Heaven can't help me now

Nothing lasts forever

But this is gonna take me down

He's so tall and handsome as hell

He's so bad, but he does it so well

I can see the end as it begins

My one condition is`
                },
                {
                    type: 'Chorus',
                    text: `Say you'll remember me

Standing in a nice dress

Staring at the sunset, babe

Red lips and rosy cheeks

Say you'll see me again

Even if it's just in your wildest dreams, ah-ah, ha

Wildest dreams, ah-ah, ha`
                },
                {
                    type: 'Verse 2',
                    text: `I said, "No one has to know what we do"

His hands are in my hair, his clothes are in my room

And his voice is a familiar sound

Nothing lasts forever

But this is getting good now

He's so tall and handsome as hell

He's so bad, but he does it so well

And when we've had our very last kiss

My last request is`
                },
                {
                    type: 'Chorus',
                    text: `Say you'll remember me

Standing in a nice dress

Staring at the sunset, babe

Red lips and rosy cheeks

Say you'll see me again

Even if it's just in your wildest dreams, ah-ah, ha (ha-ah, ha)

Wildest dreams, ah-ah, ha`
                },
                {
                    type: 'Bridge',
                    text: `You'll see me in hindsight

Tangled up with you all night

Burning it down

Someday when you leave me

I bet these memories

Follow you around

You'll see me in hindsight

Tangled up with you all night

Burning (burning) it (it) down (down)

Someday when you leave me

I bet these memories

Follow (follow) you (you) around (follow you around)`
                },
                {
                    type: 'Chorus',
                    text: `Say you'll remember me

Standing in a nice dress

Staring at the sunset, babe

Red lips and rosy cheeks

Say you'll see me again

Even if it's just pretend`
                },
                {
                    type: 'Chorus',
                    text: `Say you'll remember me

Standing in a nice dress

Staring at the sunset, babe

Red lips and rosy cheeks

Say you'll see me again

Even if it's just (pretend, just pretend) in your wildest dreams, ah-ah, ha (ah)

In your wildest dreams, ah-ah, ha

Even if it's just stayed in your wildest dreams, ah-ah, ha

In your wildest dreams, ah-ah, ha`
                }
            ]
        },
        'How You Get the Girl': {
            title: 'How You Get the Girl',
            writer: 'Written by Taylor Swift, Max Martin & Shellback',
            content: [
                {
                    type: 'Verse 1',
                    text: `Stand there like a ghost

Shaking from the rain, rain

She'll open up the door

And say, are you insane, -ane?`
                },
                {
                    type: 'Pre-Chorus',
                    text: `Say it's been a long six months (oh oh oh, oh oh oh, oh oh, oh oh)

And you were too afraid to tell her what you want, want (oh oh oh, oh oh oh, oh oh, oh oh)`
                },
                {
                    type: 'Chorus',
                    text: `And that's how it works

That's how you get the girl

And then you say

I want you for worse or for better

I would wait for ever and ever

Broke your heart, I'll put it back together

I would wait for ever and ever

And that's how it works

That's how you get the girl, girl, oh

And that's how it works

That's how you get the girl, girl`
                },
                {
                    type: 'Verse 2',
                    text: `Remind her how it used to be, be

Yeah, with pictures in frames of kisses on cheeks, cheeks

Tell her how you must've lost your mind (oh oh oh, oh oh oh, oh oh, oh oh)

When you left her all alone and never told her why, why (oh oh oh, oh oh oh, oh oh, oh oh)`
                },
                {
                    type: 'Chorus',
                    text: `And that's how it works

That's how you lost the girl

And now you say

I want you for worse or for better

I would wait for ever and ever (ever and ever)

Broke your heart, I'll put it back together

I would wait for ever and ever

And that's how it works

That's how you get the girl, girl, oh

And that's how it works

That's how you get the girl, girl, yeah`
                },
                {
                    type: 'Bridge',
                    text: `And you could know, oh

That I don't want you to go

Remind me how it used to be

Pictures in frames of kisses on cheeks

And say you want me, yeah, yeah`
                },
                {
                    type: 'Chorus',
                    text: `And then you say I want you for worse or for better (worse or for better)

I would wait for ever and ever (ever and ever)

Broke your heart, I'll put it back together

I would wait for ever and ever (I want you for ever and ever)

And that's how it works

That's how you get the girl, girl, oh

(That's how it works) and that's how it works

That's how you get the girl, girl, oh (get the girl)`
                },
                {
                    type: 'Outro',
                    text: `and that's how it works

That's how you get the girl, girl, oh

And that's how it works

That's how you get the girl, girl, oh

And that's how it works

That's how you got the girl`
                }
            ]
        },
        'This Love': {
            title: 'This Love',
            writer: 'Written by Taylor Swift',
            content: [
                {
                    type: 'Verse 1',
                    text: `Clear blue water

High tide came and brought you in

And I could go on and on, on and on, and I will

Skies grew darker

Currents swept you out again

And you were just gone and gone, gone and gone`
                },
                {
                    type: 'Pre-Chorus',
                    text: `In silent screams

In wildest dreams

I never dreamed of this`
                },
                {
                    type: 'Chorus',
                    text: `This love is good

This love is bad

This love is alive back from the dead, oh, oh, oh

These hands had to let it go free, and

This love came back to me, oh, oh, oh

Ohh

Oh, oh, oh`
                },
                {
                    type: 'Verse 2',
                    text: `Tossing, turning

Struggled through the night with someone new

And I could go on and on, on and on

Lantern, burning

Flickered in the night, only you

But you were still gone, gone, gone`
                },
                {
                    type: 'Pre-Chorus',
                    text: `In losing grip

On sinking ships

You showed up just in time`
                },
                {
                    type: 'Chorus',
                    text: `This love is good

This love is bad

This love is alive back from the dead, oh, oh, oh

These hands had to let it go free, and

This love came back to me, oh, oh, oh`
                },
                {
                    type: 'Bridge',
                    text: `This love left a permanent mark

This love is glowing in the dark, oh, oh, oh

These hands had to let it go free, and

This love came back to me, oh, oh, oh`
                },
                {
                    type: 'Verse 3',
                    text: `Your kiss, my cheek

I watched you leave

Your smile, my ghost

I fell to my knees

When you're young, you just run

But you come back to what you need`
                },
                {
                    type: 'Chorus',
                    text: `This love is good

This love is bad

This love is alive back from the dead, oh, oh, oh

These hands had to let it go free, and

This love came back to me, oh, oh, oh`
                },
                {
                    type: 'Bridge',
                    text: `This love left a permanent mark

This love is glowing in the dark, oh, oh, oh

These hands had to let it go free, and

This love came back to me, oh, oh, oh`
                },
                {
                    type: 'Outro',
                    text: `These hands had to let it go free, and

This love came back to me, oh, oh, oh

This love came back to me, oh, oh, oh`
                }
            ]
        },
        'I Know Places': {
            title: 'I Know Places',
            writer: 'Written by Taylor Swift & Ryan Tedder',
            content: [
                {
                    type: 'Intro',
                    text: `I-I-I, I, I-I-I, I

I-I-I, I, I-I-I, I

I-I-I, I, I-I-I, I, I, I`
                },
                {
                    type: 'Verse 1',
                    text: `You stand with your hand on my waistline

It's a scene, and we're out here in plain sight

I can hear them whisper as we pass by

It's a bad sign, bad sign`
                },
                {
                    type: 'Pre-Chorus 1',
                    text: `Somethin' happens when everybody finds out

See the vultures circling, dark clouds

Love's a fragile little flame, it could burn out

It could burn out`
                },
                {
                    type: 'Chorus 1',
                    text: `'Cause they got the cages, they got the boxes

And guns

They are the hunters, we are the foxes

And we run

Baby, I know places we won't be found, and

They'll be chasing their tails trying to track us down

'Cause I, I know places we can hide

I know places

I know places`
                },
                {
                    type: 'Verse 2',
                    text: `Lights flash and we'll run for the fences

Let them say what they want, we won't hear it

Loose lips sink ships all the damn time

Not this time`
                },
                {
                    type: 'Pre-Chorus 2',
                    text: `Just grab my hand and don't ever drop it

My love

They are the hunters, we are the foxes

And we run`
                },
                {
                    type: 'Chorus 2',
                    text: `Baby, I know places we won't be found, and

They'll be chasing their tails trying to track us down

'Cause I, I know places we can hide

I know places`
                },
                {
                    type: 'Pre-Chorus 2',
                    text: `They are the hunters, we are the foxes

And we run

Just grab my hand and don't ever drop it

My love`
                },
                {
                    type: 'Chorus 3',
                    text: `Baby, I know places we won't be found, and

They'll be chasing their tails trying to track us down

'Cause I, I know places we can hide

I know places`
                },
                {
                    type: 'Bridge',
                    text: `they take their shots, but we're bulletproof

I know places

(Hide) and you know for me, it's always you

I know places

(I) in the dead of night, your eyes so green

I know places

(Hide) and I know for you, it's always me

I know places`
                },
                {
                    type: 'Outro',
                    text: `I-I-I, I, I-I-I, I

I-I-I, I, I-I-I, I`
                }
            ]
        },
        'Clean': {
            title: 'Clean',
            writer: 'Written by Taylor Swift & Imogen Heap',
            content: [
                {
                    type: 'Verse 1',
                    text: `The drought was the very worst

Ah, ah

When the flowers that we'd grown together died of thirst

It was months and months of back and forth

Ah, ah

You're still all over me like a wine-stained dress I can't wear anymore`
                },
                {
                    type: 'Pre-Chorus 1',
                    text: `Hung my head as I lost the war

And the sky turned black like a perfect storm`
                },
                {
                    type: 'Chorus 1',
                    text: `The rain came pouring down

When I was drowning, that's when I could finally breathe

And by morning

Gone was any trace of you, I think I am finally clean`
                },
                {
                    type: 'Verse 2',
                    text: `There was nothing left to do

Ah, ah

When the butterflies turned to dust that covered my whole room

So I punched a hole in the roof

Ah, ah

Let the flood carry away all my pictures of you`
                },
                {
                    type: 'Pre-Chorus 2',
                    text: `The water filled my lungs

I screamed so loud, but no one heard a thing`
                },
                {
                    type: 'Chorus 2',
                    text: `The rain came pouring down

When I was drowning, that's when I could finally breathe

And by morning

Gone was any trace of you, I think I am finally clean`
                },
                {
                    type: 'Post-Chorus',
                    text: `I think I am finally clean

Ah

Said I think I am finally clean

Ah`
                },
                {
                    type: 'Bridge',
                    text: `Ten months sober, I must admit

Just because you're clean don't mean you don't miss it

Ten months older, I won't give in

Now that I'm clean, I'm never gonna risk it`
                },
                {
                    type: 'Verse 3',
                    text: `The drought was the very worst

Ah, ah

When the flowers that we'd grown together died of thirst`
                },
                {
                    type: 'Chorus 3',
                    text: `The rain came pouring down

When I was drowning, that's when I could finally breathe

And by morning

Gone was any trace of you, I think I am finally clean`
                },
                {
                    type: 'Chorus 4',
                    text: `The rain came pouring down

When I was drowning, that's when I could finally breathe

And by morning

Gone was any trace of you, I think I am finally clean`
                },
                {
                    type: 'Outro',
                    text: `Finally clean

Think I'm finally clean

Ah, ah

Think I'm finally clean`
                }
            ]
        },
        'Wonderland': {
            title: 'Wonderland',
            writer: 'Written by Taylor Swift, Max Martin, Shellback & Ali Payami',
            content: [
                {
                    type: 'Verse 1',
                    text: `Flashing lights and we

Took a wrong turn and we

Fell down a rabbit hole

You held on tight to me

'Cause nothing's as it seems

And spinning out of control`
                },
                {
                    type: 'Pre-Chorus 1',
                    text: `Didn't they tell us don't rush into things?

Didn't you flash your green eyes at me?

Haven't you heard what becomes of curious minds?

Ooh, didn't it all seem new and exciting?

I felt your arms twisting around me

I should've slept with one eye open at night`
                },
                {
                    type: 'Chorus 1',
                    text: `We found Wonderland

You and I got lost in it

And we pretended it could last forever, eh, eh

We found Wonderland

You and I got lost in it

And life was never worse but never better, eh, eh`
                },
                {
                    type: 'Post-Chorus 1',
                    text: `(Eh, eh, eh, eh, eh) in Wonderland

(Eh, eh, eh, eh, eh) in Wonderland

(Eh, eh, eh, eh, eh) in Wonderland

(Eh, eh, eh, eh, eh) in Wonderland`
                },
                {
                    type: 'Verse 2',
                    text: `So we went on our way

Too in love to think straight

All alone, or so it seemed

But there were strangers watching

And whispers turned to talking

And talking turned to screams, oh`
                },
                {
                    type: 'Pre-Chorus 2',
                    text: `Didn't they tell us don't rush into things?

Didn't you flash your green eyes at me?

Didn't you call my fears with a Cheshire Cat smile?

Ooh, didn't it all seem new and exciting?

I felt your arms twisting around me

It's all fun and games 'til somebody loses their mind`
                },
                {
                    type: 'Chorus 2',
                    text: `Oh, darling, we found Wonderland

You and I got lost in it

And we pretended it could last forever, eh, eh

We found Wonderland

You and I got lost in it

And life was never worse but never better, eh, eh`
                },
                {
                    type: 'Post-Chorus 2',
                    text: `(Eh, eh, eh, eh, eh) in Wonderland

(Eh, eh, eh, eh, eh) in Wonderland

(Eh, eh, eh, eh, eh) in Wonderland

(Eh, eh, eh, eh, eh) in Wonderland`
                },
                {
                    type: 'Bridge',
                    text: `I reached for you

But you were gone

I knew I had to go back home

You search the world for something else

To make you feel like what we had

And in the end, in Wonderland, we both went mad`
                },
                {
                    type: 'Chorus 3',
                    text: `Oh, we found Wonderland

You and I got lost in it

And we pretended it could last forever, eh, eh (last forever)

We found Wonderland

You and I got lost in it (got lost in it)

And life was never worse but never better, eh, eh (never better)`
                },
                {
                    type: 'Outro',
                    text: `We found Wonderland (eh, eh, eh, eh, eh)

You and I got lost in it (in Wonderland)

And we pretended it (eh, eh, eh, eh, eh)

Could last forever (in Wonderland)

We found Wonderland (eh, eh, eh, eh, eh)

You and I got lost in it (in Wonderland)

And life was never worse but never better (eh, eh, eh, eh, eh)

In Wonderland`
                }
            ]
        },
        'You Are In Love': {
            title: 'You Are In Love',
            writer: 'Written by Taylor Swift & Jack Antonoff',
            content: [
                {
                    type: 'Verse 1',
                    text: `One look, dark room

Meant just for you

Time moved too fast

You play it back

Buttons on a coat

Lighthearted joke

No proof, not much

But you saw enough`
                },
                {
                    type: 'Verse 2',
                    text: `Small talk, he drives

Coffee at midnight

The light reflects

The chain on your neck

He says, "Look up."

And your shoulders brush

No proof, one touch

But you felt enough`
                },
                {
                    type: 'Chorus 1',
                    text: `You can hear it in the silence (silence), silence (silence) you

You can feel it on the way home (way home), way home (way home) you

You can see it with the lights out (lights out), lights out (lights out)

You are in love, true love

You are in love`
                },
                {
                    type: 'Verse 3',
                    text: `Morning, his place

Burnt toast, Sunday

You keep his shirt

He keeps his word

And for once you let go

Of your fears and your ghosts

One step, not much

But it said enough`
                },
                {
                    type: 'Verse 4',
                    text: `You kiss on sidewalks

You fight then you talk

One night he wakes

Strange look on his face

Pauses, then says

"You're my best friend."

And you knew what it was

He is in love`
                },
                {
                    type: 'Chorus 2',
                    text: `You can hear it in the silence (silence), silence (silence) you

You can feel it on the way home (way home), way home (way home) you

You can see it with the lights out (lights out), lights out (lights out)

You are in love, true love`
                },
                {
                    type: 'Bridge',
                    text: `And so it goes

You two are dancing in a snow globe 'round and 'round

And he keeps a picture of you in his office downtown

And you understand now why they lost their minds and fought the wars

And why I've spent my whole life trying to put it into words`
                },
                {
                    type: 'Chorus 3',
                    text: `'Cause you can hear it in the silence

You can feel it on the way home

You can see it with the lights out

You are in love, true love

You're in love`
                },
                {
                    type: 'Chorus 4',
                    text: `You can hear it in the silence (silence), silence (silence) you

You can feel it on the way home (way home), way home (way home) you

You can see it with the lights out (lights out), lights out (lights out)

You are in love, true love

You are in love`
                },
                {
                    type: 'Chorus 5',
                    text: `You can hear it in the silence (silence), silence (silence) you

You can feel it on the way home (way home), way home (way home) you

You can see it with the lights out (lights out), lights out (lights out)

You are in love, true love

You are in love`
                }
            ]
        },
        'New Romantics': {
            title: 'New Romantics',
            writer: 'Written by Taylor Swift, Max Martin & Shellback',
            content: [
                {
                    type: 'Verse 1',
                    text: `We're all bored, we're all so tired of everything

We wait for trains that just aren't coming

We show off our different scarlet letters

Trust me, mine is better`
                },
                {
                    type: 'Verse 2',
                    text: `We're so young but we're on the road to ruin

We play dumb but we know exactly what we're doing

We cry tears of mascara in the bathroom

Honey, life is just a classroom`
                },
                {
                    type: 'Pre-Chorus 1',
                    text: `'Cause baby, I could build a castle

Out of all the bricks they threw at me

And every day is like a battle

But every night with us is like a dream`
                },
                {
                    type: 'Chorus 1',
                    text: `Baby, we're the new romantics

Come on, come along with me

Heartbreak is the national anthem

We sing it proudly

We are too busy dancing

To get knocked off our feet

Baby, we're the new romantics

The best people in life are free`
                },
                {
                    type: 'Verse 3',
                    text: `We're all here, the lights and noise are blinding

We hang back, it's all in the timing

It's poker, he can't see it in my face

But I'm about to play my Ace`
                },
                {
                    type: 'Verse 4',
                    text: `We need love, but all we want is danger

We team up then switch sides like a record changer

The rumors are terrible and cruel

But, honey, most of them are true`
                },
                {
                    type: 'Pre-Chorus 2',
                    text: `'Cause baby, I could build a castle

Out of all the bricks they threw at me

And every day is like a battle

But every night with us is like a dream`
                },
                {
                    type: 'Chorus 2',
                    text: `Baby, we're the new romantics

Come on, come along with me

Heartbreak is the national anthem

We sing it proudly

We are too busy dancing

To get knocked off our feet

Baby, we're the new romantics

The best people in life are free`
                },
                {
                    type: 'Transition',
                    text: `So come on, come along with me

The best people in life are free`
                },
                {
                    type: 'Bridge',
                    text: `Please take my hand and

Please take me dancing and

Please leave me stranded

It's so romantic (it's so romantic)

(Ah, ah, ah, ah, ah, ah)`
                },
                {
                    type: 'Pre-Chorus 3',
                    text: `Oh, 'cause baby, I could build a castle

Out of all the bricks they threw at me

And every day is like a battle

But every night with us is like a dream`
                },
                {
                    type: 'Pre-Chorus 4',
                    text: `'Cause baby, I could build a castle (castle)

Out of all the bricks they threw at me

And every day is like a battle

But every night with us is like a dream`
                },
                {
                    type: 'Chorus 3',
                    text: `Baby, we're the new romantics

Come on, come along with me

Heartbreak is the national anthem

We sing it proudly

We are too busy dancing

To get knocked off our feet

Baby, we're the new romantics

The best people in life are free`
                }
            ]
        }
    };
    
    songItems.forEach(item => {
        item.addEventListener('click', function () {
            // 移除之前的活动状态
            document.querySelector('.song-item.active')?.classList.remove('active');

            // 添加新的活动状态
            this.classList.add('active');

            // 获取歌曲标题
            const songTitle = this.querySelector('.song-title').textContent;

            // 更新歌词内容
            updateLyrics(songTitle);
        });
    });

    function updateLyrics(songTitle) {
        const song = lyrics[songTitle];
        if (!song) return;

        const html = `
            <div class="lyrics-header">
                <h1 class="lyrics-title">${song.title}</h1>
                <p class="lyrics-info">${song.writer}</p>
            </div>
            <div class="lyrics-text">
                ${song.content.map(verse => `
                    <div class="lyrics-verse">
                        <div class="verse-title">[${verse.type}]</div>
                        ${verse.text}
                    </div>
                `).join('')}
            </div>
        `;

        lyricsContent.innerHTML = html;
    }
});

window.onload = function(){
    const userName = localStorage.getItem("userName");
    const password = localStorage.getItem("password");

    if(!userName || userName.trim() === ""
        || !password || password.trim() === ""
    ){
        console.log("No user is logged in.")
        return false;
    }

    document.getElementById("login").innerHTML = "HI,"+userName+"!";
}