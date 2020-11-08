---
layout: post
title:  "Programming Language Foundations"
date:   2020-11-08 +0800
categories: Notes
tag: cs
---

### CH0 Preface

This book generate a survey of mathematical study of programming languages, include **Operational Semantics**, **Hoare Logic** and **Static Type Systems**.

In this book, two main conceptual threads are developed:

- Formal techniques for reasoning about **the properties of specific programs**.
- The use of **type systems** for eastablishing well-behaved programs in a given language.

#### Program Verification

In the first part, we introduce two topics: for proving specific programs and for proving general properties of a language.

Firstly, we need to represent the programs into some mathematical objects for precise discussion. We also need to use functions and relations to represent their behaviours. Our main tools are **abstract syntax** and **operational semantics**.

We consider firstly is the toy language imp built in logic foundations. Two aspects are done for this verification: the **equivalence** of two programs that is in the intuitive sense they exhibit the same behaviour when the initial state is determined. By applying this criterion, we are able to judge the correctness of **metaprograms**, such as compilers and optimizer. Secondly, we develop a mehodology to prove a given program matches some formal specifications of its behaviour. We introduce the **Hoare triples**, and the reasoning principles of **Hoare Logic**.

This part if intended to give a taste of key ideas and mathematical tools in a wide variety of real-world software and hardware verification tasks.

#### Type Systems

Another major topic, is type systems -- powerful tools for establishing properties of **all** programs in a given languages.

This is a most example of a highly successful class of formal verification techniques known as **lightweight formal methods**. These techniques are so modest that even those programmers unfamiliar with the underlying theories can apply and handle. Other examples include **model checkers**, and **run-time monitoring techniques**.

This also completes a circle for this section of study: the **simply typed lambda-calculus**, is essentially a simplified model of the core of Coq itself!

### CH1 Equiv

#### Behavioral Equivalence

In previous chapters, we discussed a very simple transformation of programs: optimize of zero plus a number. Despite the variables, things still remain simple for us to master, but in the following sections, we still need to discuss the role of variables and assignments.

For expressions, it easy to claasify their equivalence, for all states, if the evaluations of two expressions are the same, we shall consider they are **behaviorally equivalent**.

When it comes to commands, the situation is a bit more subtle, we shall add a constraint that the two commands should terminate, in this way, we can say that for all start, the two commands will reach a same end state. When the two commands will both not **terminate**, they are also equivalence.

For if and while we shall give some theorems in predicates.

A more interesting fact about while is that any number of copies of the body can be unrolled without changing its meaning.

#### Properties of Behavioral Equivalence

First of all, let us prove that number, boolean and command match the equivalences. That is, the reflexivity, the symmetric and the transitive.

Less obiviously, the equivalence of behaviours also satisfy the **congruence**, if all small part of a expression are equivalent, the whole expression is also equivalent.

Using this propeties, we can assume that the work of proof in a whole program only matches the differences instead of the programme's size.

#### Program Transformations

Programme Transformations are some like transform a program into another one as output. If the transformation keeps the original behaviour, we can say that the transformation is sound.

A canonical example is constant-folding transformation.

#### Proving Inequivalence

Suppose we have a optimizer that replace all expression of a variable with its previous assignment.

It is easy to show a constradiction that this optimizer is not sound. But we are still intrerested in its formal proof.

Suppose we have a optimizer that replace all expression of a variable with its previous assignment.

It is easy to show a constradiction that this optimizer is not sound. But we are still intrerested in its formal proof.

We have seen that the evaluation of Imp is deterministic. But in some languages, nondeterminism is also an important part. In this section, we will expand our Imp with a new command called **HAVOC** that returns any value.

Notice that we are not saying any probabilities of outcomes, HAVOC can be **any** number.

The nondeterminism exists because programmers don't care about the decision programs make sometimes, this makes it possible for compilers to choose whichever will run faster.

### CH2 Hoare

We have developed a small programming language with its **AST** and **evaluation relations** in previous chapters. They provided the operational semantics for this language. We have proved many metatheoretic properties for the whole language instead of some programmes. For example, the **determinism of evaluations** and **equavalence and transformations with determined termination**.

We have some tools for discussion now, before we dive into the world of types, we can use these toolchains for a more concrete problem, by applying the basic properties and propositions, we are able to give some examples of **software verification**.

The method for this goal is **Floyd-Hoare Logic**, shortened to just **Hoare Logic**, with two splendid ideas: **natural specifications** and **compositional proof technique**, we own a systematic method for proving **functional correctness**.

#### Assertions

To specify the running state of a program, we should first build a formal rule to describe the state.

An assertion is a **predicate** or a **proposition**about state.

The implication on assertion category is represented like `P ->> Q`.

The equivalence is represented like `P <<->> Q`.

#### Hoare Triples

Next we need a formal way to express the behavior of commands.

In general, a command transform a status to another, so we are able to use two assertions to express a command.

Def. If command c is started in a state satisfying assertion P, and if c eventually terminates in some final state, then this final state will satisfy the assertion Q. We call this **Hoare Triples**, and P is called **precondition** of c, while Q is the **postcondition**.

#### Proof Rules

The goal of Hoare Logic is to provide methods for combination, that is to say, the proof for rightness of a program can reflect the program itself. By apply specific rules, we are able to construct a common way to prove, even without expanding the definition of Hoare Triples.

**Assignment** is the most basic way in rules.

The formal rule is : an arbitrary assertion Q holds after X ::= a, we need to assume that Q holds **before** X ::= a, but with all occurrences of X replaced by a in Q.

{% raw %}
```
Theorem hoare_asgn : ∀Q X a,
  {{Q [X |-> a]}} X ::= a {{Q}}.
```
{% endraw %}

So assignment is just like the **transformation** of a property Q.

**Consequence**

Sometimes the Hoare Triples we get from the proof rules are logically equivalent but not the same form we wish. For example, we may face the condition for weaker preconditions or stronger postconditions we want.

That definitely need two **consequence rules** for description.

**Skip** doesn't change the state.

{% raw %}
```
Theorem hoare_skip : ∀P,
    {{P}} SKIP {{P}}.
```
{% endraw %}

**Sequencing** is a transformation with an intermediate assertion. Naturally, we give the assertion in a backwards order, that is to say, the method to construct a Hoare logic is to begin at the end of the program.

{% raw %}
```
Theorem hoare_seq : ∀P Q R c1 c2,
    {{Q}} c2 {{R}} →
    {{P}} c1 {{Q}} →
    {{P}} c1;;c2 {{R}}.
```
{% endraw %}

**Conditionals** We shall make a combination with conditional and preconditions to show the action of false and true.

The formal rule is given below:

{% raw %}
```
Theorem hoare_if : ∀P Q b c1 c2,
    {{fun st => P st ∧ bassn b st}} c1 {{Q}} →
    {{fun st => P st ∧ ¬(bassn b st)}} c2 {{Q}} →
    {{P}} IFB b THEN c1 ELSE c2 FI {{Q}}.
```
{% endraw %}

**Loop**

Define an **invariant of loop**, we can give the rule as followed:

{% raw %}
```
Theorem hoare_while : ∀P b c,
    {{fun st => P st ∧ bassn b st}} c {{P}} →
    {{P}} WHILE b DO c END {{fun st => P st ∧ ¬(bassn b st)}}.
```
{% endraw %}

Hoare rules that only talk about what happens when commands **terminate** (without proving that they do) are often said to describe a logic of "**partial**" correctness. It is also possible to give Hoare rules for "**total**" correctness, which build in the fact that the commands terminate.

### CH3 Hoare2

#### Decorated Programs

The beautiful part of Hoare Logic is that it is combinable, the structure of proof is just the structure of program itself.

So we can use assertions to decorate some program to make them self-proved.

To check whether a decorated program is an efficient proof, we only need to check whether a command is **locally consistent** with nearby assertions.

The locally consistent is just the step to verify the correctness of the whole program, the only unusual thing is the **loop invariant**.

#### Finding Loop Invariants

To find a loop invariant, three conditions must be meet.

- It must be **weak** enough to be implied by preconditions.
- It must be **strong** enough to imply the postconditions.
- It must be **preserved** by each iteration of loop.

Some trick:

- Postconditions are sometimes useful.
- Add the unchanged equivalence into invariant.
- Change the parameter Into variable.

#### Weakest Preconditions

The weakest precondition is defined below:

{% raw %}
```
Definition is_wp P c Q :=
	{{P}} c {{Q}} ∧
	  ∀P', {{P'}} c {{Q}} → (P' ->> P).
```
{% endraw %}

P is the **weakest** preconditions that holds Q after executing c.

#### Formal Decorated Programs

We can use formal decorations to make it automated to infer or check the validity of decorated programs.

We attach a assertion with a single command as its precondition so it fits the decorations.

We also need a way to extract verification conditions from the decorated program.

### CH4 HoareAsLogic

The previous Hoare Logic are considered as a model, every proof of constructor is given by lemma and the correctness of a program is proved by combining these lemmas.

Another way to introduce Hoare Logic is to make it a logic system, and the correctness is a logical expression in this system.

#### Definition

Using Inductive types to define it.

#### Properties

We may wonder how to build the connection between this and the Hoare Triples.

If the Hoare system can perform all correctness check of programs, we say the system is **relatively complete**.

Another way to define the weakest preconditions is

{% raw %}
```
Definition wp (c:com) (Q:Assertion) : Assertion :=
    fun s ⇒ ∀s', s =[ c ]⇒ s' → Q s'.
```
{% endraw %}

Hoare Logic are **not decidable**, there **does not**exist an algorithm that can solve all correctness of all Hoare triples. Although the definition of this system is much more clear, the long and dull way to write proof is not what we want.

### CH5 SmallStep

The Imp language before takes a big-step style for evaluating, which is also called the natural semantics. However, two problems remain unsolved. The first thing is that big step semantics have no way to solve the **concurrent** properly. The second is that it can't take the **undefined behavior** and **ever loops** apart.

So we need a more accurate way to define the behavior of programs, that is **small-step semantic** we will introduce.

#### A Toy Language

The language only contains two commands, constant c, and plus.

The small step semantics are shown below

{% raw %}
```
P (C n1) (C n2) --> C (n1 + n2)
------
t1 --> t1'

P t1 t2 --> P t1' t2
t2 --> t2'
------
P (C n1) t2 --> P (C n1) t2'
```
{% endraw %}

The semantics only defined single step relationship, that is, only the non-constant argument on the most left side are replaced.

#### Relations

The single step relation is just like big step, which is **deterministic**.

Firstly, we have an **abstract** machine. In every time, the state of machine is a term. One step is an **atomic** calculation.

The halting status means no more calculations.

The final state of this machine is always a **value**.

**Strong Progress** : If t is a term, then t is either a value, or there exists a term t', t --> t'.

The values, or the term that cannot keep front, is called **normal forms**.

Value is a **grammar** concept ,while normal form is a semantic one. They are not always the same!

The logical short circuit may lead to **indeterministic** evaluation.

#### Multi-Step Reduction

The relation of multi-step reduction is defined below:

If t can reach to t' in any number of single step(including 0), then t -->* t'.

We define the **result** of t is the normal form that can be reached in multiple steps.

The multi-step relation is a **multi-step closure** of single step relation.

Because of the determinism of this language, the result of a term t is also deterministic. Moreover, every term t can have a normal form, so this language is also **normalizing**.

At last, though exists small step and big step semantics, they can be proved to be equivalent.

#### Small-Step Imp

The arithmetic and Bool expression's small step is so obvious for we have worked out previously.

The interesting part is the commands' small step semantics.

We have the follow tricks :

- SKIP is the **command value**.
- Assignment means update to SKIP and an update on state.
- Sequence means waiting for left reduced to SKIP and throw it.
- WHILE can be represented as a conditional clause with the same while.

Let’s add a command called Par to see the power of small step when dealing with the concurrence.

#### A Small-Step Stack Machine

The compiled expression are shown as a stack language, which is also can be small steps.

### CH6 Types

The main topic following is the **type system**, a static analysis technique to **classify** the expressions.

The first thing shall be introduced are the **type preservation** (a.k.a. **subject reduction**) and **progress**.

#### Typed Arithmetic Expressions

Let's still start in a toy language. To discuss with the type errors, we need two different data types, num and bool values can do this job.

The small-step semantics are also trivial to explain.

The first influence of introducing the type systems is : The **strong progress theorem** of our toy language **fails** here. In another words, they are **stuck**.

However, the value is still normal forms, so this language has no problems.

The **determinism** of this language still remains true.

It’s easy to leave out the ill-typed terms by **typing relations**.

Typing relations are **conservative**, or in another word, **static**. It will not check the normal form of a term.

If a term is well-typed, then the strong progress theorem still works. The type preservation is, each step keeps the **well-typed** property of term.

### CH7 Stlc

Simply typed lambda-calculus is a tiny core calculus embodying the **functional abstraction**.

The challenges in formalizing the system are mainly variable **binding** and **substitution**.

#### Overview

STLC builds on a collection of **basic types**. To simplify, we still use only a type : bool for this section.

We need **variables**, **functional abstractions** and **applications**.

STLC now have two types : the Bool and the **arrow types**.

#### Syntax

Without type inference, it's easy to define terms and types of STLC.

#### Operational Semantics

Firstly, we need to set values.

If we choose the eager evaluation, we have no efficient ways to deal with **free variables**, in fact, the eager evaluation takes a step from inside to outside, without scopes, some values are nondeterministic.

So we choose lazy evaluation to eliminate **open terms**.

Next, we need to look through the core of STLC : substitution.

The important thing is that we cannot substitute a **bounded** variables in lambda functions.

In fact, it's very **hard** to deal with alpha-transformations.

The reduction part is just like the previous semantics, first the left, then the right, finally, the substitution.

#### Typing

We introduce a new concept called **typing context** to decide the type of free variables, which is a **type judgment**.

### CH8 StlcProp

#### Canonical Forms

The first step to build the basic properties of types is to identify all canonical forms, i.e., **well-typed closed values**.

For Bool Type, it is true and false. For Arrow Type, it is all lambda abstractions.

#### Progress

The progress theorem is similar to the one we saw in the Types chapter.

#### Preservation

Since Stlc has some properties related to variables and substitutions, we need to develop a new technique for reason about this. Working from top to bottom goes like this:

1. The **preservation theorem** builds on an induction on type derivation, so we need to know in the case of ST_AppAbs, the substitution itself preserves the types, so we need a **substitution lemma**.
2. The tricky cases in substitution lemma is the variables and functional abstractions. To prove the consistence of types when take a term s that has been shown well-typed in some context Gamma, will be the same in a slightly different context Gamma', we prove the **context invariance lemma**.
3. The context invariance lemma shows Gamma won't change the type of free variables in inessential changes, so at last we need a definition about the **free variables in a term**.

Let us build this story reversely.

**Free Occurrences** : A variable x appears free in a term if these is no **abstraction label** for x and the term contains some **occurrences** of x.

Every term is an open term; the closed terms are a subset of the open ones. "Open" precisely means "possibly containing free variables."

**Substitution** : Firstly, we need a lemma connecting free variables and substitution, that is, if the term x has free variable x, and t is well-typed, it must exist a type T' in Gamma which assigned to x.cj.

Any term t that is well typed in the empty context is closed (it has no free variables).

Context invariance lemma : every free variable in T has same type in two contexts, then T has the same type in two contexts.

Finally the substitution lemma(which is a bit like "computational property") is easy to prove now. So does the main theorem.

#### Type Soundness

Put progress and preservation together and show that a well-typed term can **never** reach a stuck state.

#### Uniqueness of Types

Another nice property of the STLC is that types are unique: a given term (in a given context) has at most one type.

### CH9 MoreStlc

#### Simple Extensions to STLC

In this chapter, let us close the gap with the practical programming languages by adding many features.

**Numbers** : we have seen in the previous exercises before about this.

**Let bindings** : By using the traditional call-by-value, we are able to calculate the type of let expressions.

The rules are :

{% raw %}
```
Gamma ⊢ t1 ∈ T1 x⊢>T1; Gamma ⊢ t2 ∈ T2
------
Gamma ⊢ let x=t1 in t2 ∈ T2
```
{% endraw %}

**Pairs** : It's simple to formalize the **product type**into a language. We add a rule for evaluating from left to right.

**Unit** : we define a unit type to deal with some **side effects**.

**Sums** : Adding two constructors and a **pattern matching** gammar for sum type, and to guarantee the **indentity of types**, we also need an **explicit type annotation** for sum type.

**Lists** : The same to Coq list, but the type signature of nil is forced.

**General recursion**: Using fixpoint.

For each type T, we can give a **diverging term**that is fix (\x: T .x).

**Record**: One way is to give quantification and comprehension of informal rules, which is essential in subtyping. Another way is a constructor that represents adding new record into an exist record, which will be much more elegant.

### CH10 Sub

#### Concepts

Given an example in OOP Language.

Suppose a Person class extends a Student class, with one more property called GPA, then there is no reason that when we need a Person, a Student can be safely substituted.

The idea here is called **Subtyping**, in a formal way, we say: if a value of type S can safely be used in any context where a value of type T is expected, then S is a subtype of T, represented as S <: T.

The rule is named after **safe substitution principle**.

In many OOP languages, the type of an object is a class, or an interface. They are related by the subclass relations.

The concrete steps can be divided into two:

1. Define a binary subtyping relation.
2. Enrich the typing relation to take subtyping into account.

The second step is called the rule of subsumption:

{% raw %}
```
Gamma ⊢ t ∈ S  S <: T
------
Gamma ⊢ t ∈ T
```
{% endraw %}

The first step is all we need to account for.

We can be easy to infer that subtyping relation holds the property of **transitivity** and **reflexivity**.

The pair type's subtyping relation is intuitive.

The arrow type is **contravariant** at the first argument and **covariant** at the second when considered subtyping.

The subtyping relation of a record(class) can be divided into three parts.

1. Width subtyping, which means adding some fields always returns a subtype.
2. Depth subtyping, which means if some fields of two records have subtyping relations.
3. Permutation subtyping, which shows the order of fields doesn't matter in subtyping relations.

Three rules are not necessary when designed a language(Java has no permutation rules for example).

Finally we can add a maximum element called **Top** as the superclass of all the types.

#### Formal Definition

The main changes compared to the STLC is related on the type relations.

We begin by developing subtyping relations and its properties.

#### Properties

The fundamental is still progress and preservation.

**Inversion Lemma**: Bool is the only subtype of Bool and every subtype of Arrow Type is Arrow Type.

The preservation theorem gets a bit tricky when introduced subtyping. Some places where can be solved by inversion now needs a real proof.

### CH11 Typechecking

Since `has_type` function **syntax directed**, we can easily write a function based on rules to check whether an expression has proper type.

#### Comparing Types

Firstly, we will need a function to compare type equality, which is easy to accomplish.

Then we can write a recursive function to typecheck.

{% raw %}
```
Fixpoint type_check (Gamma : context) (t : tm) : option ty :=
  match t with
  | var x =>
      Gamma x
  | abs x T11 t12 =>
      match type_check (update Gamma x T11) t12 with
      | Some T12 => Some (Arrow T11 T12)
      | _ => None
      end
  | app t1 t2 =>
      match type_check Gamma t1, type_check Gamma t2 with
      | Some (Arrow T11 T12),Some T2 =>
          if eqb_ty T11 T2 then Some T12 else None
      | _,_ => None
      end
  | tru =>
      Some Bool
  | fls =>
      Some Bool
  | test guard t f =>
      match type_check Gamma guard with
      | Some Bool =>
          match type_check Gamma t, type_check Gamma f with
          | Some T1, Some T2 =>
              if eqb_ty T1 T2 then Some T1 else None
          | _,_ => None
          end
      | _ => None
      end
  end.
```
{% endraw %}

#### **Digression: Improving the Notation**

We can use a more Haskell monadic way to express this function clearly like

{% raw %}
```
Notation " x <- e1 ;; e2" := (match e1 with
                              | Some x ⇒ e2
                              | None ⇒ None
                              end)
         (right associativity, at level 60).

Notation " 'return' e "
  := (Some e) (at level 60).
Notation " 'fail' "
  := None.
```
{% endraw %}

#### Properties

Then we prove the soundness and completeness of type checker by comparing it with `has_type`.

Leaving Operation Semantics for STLC.

### CH12 Records

We have seen when treating records like nested products, it shows inefficiency and may stuck in parser, so it's time to add it into our STLC as the first citizen.

#### Formalizing Records

At first, we turn to Coq list types and find the induction rules Coq generated doesn't preserve the filed information we need.

So we need to define our own `nil` and `cons` types as appending a field on records. This also comes with problem that we cannot ensure the tail of a `cons` is a record! Like:

{% raw %}
```
Definition weird_type := <{{ a : A :: B }}>.
```
{% endraw %}

An induction proposition with checking will rule out these ill-formed types.

{% raw %}
```
Inductive well_formed_ty : ty → Prop :=
  | wfBase : ∀ (i : string),
        well_formed_ty <{{ Base i }}>
  | wfArrow : ∀ T1 T2,
        well_formed_ty T1 →
        well_formed_ty T2 →
        well_formed_ty <{{ T1 → T2 }}>
  | wfRNil :
        well_formed_ty <{{ nil }}>
  | wfRCons : ∀ i T1 T2,
        well_formed_ty T1 →
        well_formed_ty T2 →
        record_ty T2 →
        well_formed_ty <{{ i : T1 :: T2 }}>.
```
{% endraw %}

With utility functions on looking up it's easy to define substitution and reduction, so as the type checker.

A lemma needed for progress proof is:

{% raw %}
```
Lemma lookup_field_in_value : ∀ v T i Ti,
  value v →
  empty ⊢ v \in T →
  Tlookup i T = Some Ti →
  ∃ ti, tlookup i v = Some ti ∧ empty ⊢ ti \in Ti.
```
{% endraw %}

Now that the weakening and preservation theorem is also provable, so the addition of record for STLC is complete.
