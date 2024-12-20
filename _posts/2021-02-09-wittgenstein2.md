---
layout: post
title: What We Can Speak of
date: 2021-02-09 +0000
lang: en
permalink: /model
---

Most of us shall be familiar with the famous quote of Ludwig Wittgenstein: *Wovon man nicht sprechen kann, daüber muss man schweigen.* But to which part man cannot speak of, and what the world out of logic look like, became an everstanding question in the history of philosophy and mathematics.

I want to emphasize today that what Wittgenstein said about logic, in fact, turns out to be something that actually forbidden in logic. Not only ethics and religion, but also logic truth itself, cannot be said in logic, or precisely, first-order logic.

A previous understanding of first-order logic and set theory is needed for this essay.

## Numbers

Where does number come from? Does it just lie beyond the world, like logic? One may argue that set theory has already give us an elegant definition, which is $$\emptyset, \{\emptyset\}, \{\emptyset, \{\emptyset\}\}...$$. This structure does have nicely well-ordered form, and be consistent with axioms of set theory. 

In other sense this definition is just a construction, instead of explaination. We decide to make these sets natural numbers because we have already known the properties of natural numbers. Moreover, this structure is unable to derive addition and multiplication with only logic insight[^1]. 

Another approach we can rely on is counting. Consider a collection ordered into a row. We do not really care about what elements in this collection, but in some ways they are same. At first, we have a row, one at front of the other. We can observe this is always the *shortest* row in all. We call it *two*. By appending *immediately* an larger element, we get what we called *three*, and so on.

If we append another ordered row onto this row, and count these elements, we now get a little addition example. Also, if we *replace* all elements in the row with a row, we actually get multiplication.

This means we have built the number system on the observations of sizes, the size of same ordered collection. We cannot make deeper clarification now. Concepts are always abstract, and if we dare to walk into the field of phenomenology, there is always room for doubt. For example, how we know what counting is? Is it a given of intuition? And this is not this essay aiming for.

Readers may be concerned that we start the counting at two, but what about *one* and *zero*? We need to be very careful when we talk about one. Only once we accept the forming of natual numbers from comparisons of sizes, can we accept the extreme case of this one-element row. This is an argument first proposed by Edmund Husserl. *One* is the first *negative* number, that is to say, one is lack of multiplicity. Nothing is being compared in an one-element row.

When it comes to zero, things become more interesting. Not every numberical system has zero, and in fact a number system without zero, denoted by $$\mathbb{N}^+$$, is isomorphic with natural number. Zero is a status ready to be extended, an extension of our counting method. Moreover, zero is essential when making $$(\mathbb{N}, +, \times)$$ a field.

## Infinity

Our number system works well in every *finite* domain, but arises a serve problem when considering about *infinity*. The two words only make sense when related. No infinity, no finiteness. If there is a man labourously append elements after the row, step by step, he will soon get an arbitary large set, but not infinity. Infinity is not any result of finiteness, it must begin from infinity.

This is an astonishing derivation from logic and set theory, that we always denote the first ordinal reached infinity $$\omega$$, the ordinal of natural numbers. Then what's next? We have $$\omega + 1, \omega + 2, ... \omega^\omega$$, we can even define the first ordinal that cannot be recursively defined in terms of smaller ordinals as $$\omega_1^{CK}$$[^2]. These infinities are all countable, which we called *structural infinity*. The infinity is axiomatized in **ZFC** and **NBG** with *axiom of infinity*:

$$\exists S: \emptyset \in S \land (\forall x: x \in S \implies x \cup \{x\} \in S)$$

What really worry us is uncontable sets, like $$\mathbb{R}$$, whose ordinal is $$\omega_1$$. Despite what Cantor made towards the magical and anti-intuitional findings, many mathematicians and philosophers still have doubts on what set theory brought. From a philosophical view, infinity must lose so many personalities. If there really exists a *substantia* containing everything, then this unique God **must not** care about anything.

Even from a logic insight, some debates do have their places. An example is the structure $$(\mathbb{R}, +)$$. What should we think about the relation $$+$$? If it is a function performed on inputs, then there inevitably exist something uncomputable elements, like some transcendental numbers. If we think of it as a database, and formula like $$a + b = c$$ is what we finally find, there will also be some doubts: Searching is a step-by-step performation, and thus how can we perform an effective search in the domain of vast, uncountable sets? Finally, if we consider relation as an oracle, a machine ready to answer your yes-or-no question, then how can we ask some triples that even do not have names, like some infinite strings of digits?

These questions pushed the development of model theory on first-order logic, precisely, the definablity of elements, which I will show in next section.

## Minimality

Since many first-order sentences can be talked about on structures, there must be structures where a set of sentences always be true. Formally, a set of sentences $$T$$ now has a *model* $$\frak{U}$$.

Let us inspect a simple structre $$(\mathbb{N}, \lt)$$. What can we say about it? Firstly, it is obvious to see all elements in it can be defined uniquely, or in another words, $$(\mathbb{N}, \lt)$$ has no nontrivial symmetries.[^3] I will only show you two examples:

For zero, we use: $$\forall y: x = y \lor x < y$$, and denote it as $$0$$.

For one, we use: $$\forall y: 0 < y \implies x = y \lor x < y$$, and denote it as 1.

Here we give the definition of definability:

Let $$A$$ be the domain of a structure $$\frak{U}$$. A subset X of the Cartesian power $$A^n$$ is *definable* in $$\frak{U}$$ if there is a first-order formula $$\phi(x_1,...,x_n)$$ of the language of the structure such that $$X = \{(a_1,...,a_n)\ :\ \phi(a_1,...,a_n)\ is\ true\ in\ \frak{U}\}$$.

In $$\mathbb{R}$$ there always exists undefinable element, like $$\pi$$. Thus we must expand such structure $$\frak{U}$$ into $$\frak{\bar{U}}$$ so that every element $$x$$ can be determined by a unique unary relation $$R(x)$$. If $$X$$ is definable in $$\frak{\bar{U}}$$, then it is said to be *parametrically definable* in $$\frak{U}$$.

$$(\mathbb{N}, \lt)$$ is really so tame in logic sense, in fact, it is even *minimal*, which means every parametrically definable subsets of $$\mathbb{N}$$ is either finite or cofinite(its complement is finite). The proof is omitted in this essay in case of long and dull reading experience. For more information, readers can find in Model Theory Wiki and nLab.

$$(\mathbb{N}, +)$$ and $$(\mathbb{N}, \times)$$ is not minimal, so one cannot define them in $$(\mathbb{N}, \lt)$$. However, they still have some well defined properties and can be understood without a gap. But when we combine them together to get $$(\mathbb{N}, +, \times)$$, so many wildness arrives. It is infact the most complex structure modern logic and mathematics dealt with, and it turns to be so sad that first-order logic can reveal **so little** about arithmetic.[^4]

Another interesting fact is that the final number field $$(\mathbb{C}, +, \times)$$, proved by Chevalley and Tarski, is also minimal, which makes it as simple as $$(\mathbb{N}, \lt)$$ in logic. In this case, properties related to complex numbers often have no first-order ground, like beautiful Mandelbrot set.

Finally, I would like to conclude this part with the proof that finiteness is not definable in first-order logic, that is to say, no theory $$T$$ has only finite model.

If we have such a theory $$T$$ that models arbitary large finite domain. Then, consider a theory $$T'$$ consisting of $$T$$ and the set of sentences $$\phi_n$$, for $$n = 1, 2, ...$$, which says there are $$n$$ different elements. Since $$T$$ is arbitary large, every finite segment of $$T'$$ now has a model. By [compactness theorem](https://ncatlab.org/nlab/show/compactness+theorem), $$T'$$ also has a model, which is a model of $$T$$, and its domain is absolute infinite, since all $$\phi_n$$ holds.

This also brings another conclusion that no single sentence theory $$\{\phi\}$$ can describe infinity, which will make $$\{\neg \phi\}$$ describe finiteness. 

## Last Words

Modern mathematics is built on set theory and logical deduction, but it does not mean this ground is so firm that no doubts can be presented. In 1929, Gödel proved the completeness theorem that if an axiom system is effectively presented, it must have a model whose domain is $$\mathbb{N}$$ and relation $$E$$ can be defined on $$(\mathbb{N}, +, \times)$$, so does **ZFC** itself!

We rely on the power of logic, we also need some caution to understand what logic cannot do. A paradise brought by Cantor, though said by Hilbert, cannot easily be abandoned. Back to Wittgenstein himself, he wrote the following paragraph later in 1939:

> I would say. ‘I wouldn’t dream of trying to drive anyone out of this paradise.’ I would try to do something quite different: I would try to show you that this is not a paradise—so that you’ll leave of your own accord. I would say, ‘You are welcome to this; just look about you.’

[^1]: To those curious readers, you can check any first-order formula on structure $$(\mathbb{N}, \lt)$$, but a more powerful tool to prove it will be introduced later. 
[^2]: This is called **Church-Kleene** ordinal.
[^3]: A joke: "Every natural number is interesting, if there is one uninteresting, then 'all numbers in front of it are interesting' makes it interesting too."
[^4]: There is a proof by Gödel that arithmetic is not axiomatizable. Also, Tarski showed the set of all sentences are true is not definable in arithmetic, in his famous undefinability of truth theorem. 

