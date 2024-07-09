"use strict";(self.webpackChunkmy_knowledge_repo=self.webpackChunkmy_knowledge_repo||[]).push([[3222],{43:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(5893),a=i(1151);const r={title:"\u7b2c\u516d\u7ae0",tags:["\u7f16\u8bd1\u5668","Programming Language Pragmatics"]},s=void 0,l={id:"technical/programming-language-pragmatics/06",title:"\u7b2c\u516d\u7ae0",description:"Control Flow",source:"@site/docs/technical/programming-language-pragmatics/06.md",sourceDirName:"technical/programming-language-pragmatics",slug:"/technical/programming-language-pragmatics/06",permalink:"/docs/technical/programming-language-pragmatics/06",draft:!1,unlisted:!1,tags:[{label:"\u7f16\u8bd1\u5668",permalink:"/docs/tags/\u7f16\u8bd1\u5668"},{label:"Programming Language Pragmatics",permalink:"/docs/tags/programming-language-pragmatics"}],version:"current",frontMatter:{title:"\u7b2c\u516d\u7ae0",tags:["\u7f16\u8bd1\u5668","Programming Language Pragmatics"]},sidebar:"technical",previous:{title:"\u7b2c\u56db\u7ae0",permalink:"/docs/technical/programming-language-pragmatics/05"}},o={},c=[{value:"Control Flow",id:"control-flow",level:2},{value:"Expression Evaluation",id:"expression-evaluation",level:3},{value:"Precedence and Associativity",id:"precedence-and-associativity",level:4},{value:"Assignments",id:"assignments",level:4},{value:"side effect",id:"side-effect",level:5},{value:"References and Values",id:"references-and-values",level:5},{value:"Boxing",id:"boxing",level:5},{value:"Initialization",id:"initialization",level:4},{value:"Dynamic Checks",id:"dynamic-checks",level:5},{value:"Definite Assignment",id:"definite-assignment",level:5},{value:"Constructors",id:"constructors",level:5},{value:"Ordering within Expressions",id:"ordering-within-expressions",level:4},{value:"Applying Mathematical Identities\uff08\u6570\u5b66\u6052\u7b49\u5f0f\uff09",id:"applying-mathematical-identities\u6570\u5b66\u6052\u7b49\u5f0f",level:4},{value:"Short-Circuit Evaluation\uff08\u77ed\u8def\u8868\u8fbe\u5f0f\uff09",id:"short-circuit-evaluation\u77ed\u8def\u8868\u8fbe\u5f0f",level:4},{value:"Structured and Unstructured Flow",id:"structured-and-unstructured-flow",level:3},{value:"Structured Alternatives to goto",id:"structured-alternatives-to-goto",level:4},{value:"Multilevel Returns",id:"multilevel-returns",level:4},{value:"Errors and Other Exceptions",id:"errors-and-other-exceptions",level:4},{value:"Continuations",id:"continuations",level:4},{value:"Sequencing",id:"sequencing",level:3},{value:"Selection",id:"selection",level:3},{value:"Short-Circuited Conditions",id:"short-circuited-conditions",level:4},{value:"Case/Switch Statements",id:"caseswitch-statements",level:4},{value:"Iteration",id:"iteration",level:3},{value:"Enumeration-Controlled Loops\uff08for\u5faa\u73af\uff09",id:"enumeration-controlled-loopsfor\u5faa\u73af",level:4},{value:"Combination Loops",id:"combination-loops",level:4},{value:"Iterators",id:"iterators",level:4},{value:"Recursion \u9012\u5f52",id:"recursion-\u9012\u5f52",level:3},{value:"Iteration and Recursion",id:"iteration-and-recursion",level:4},{value:"Applicative- and Normal-Order Evaluation",id:"applicative--and-normal-order-evaluation",level:4},{value:"Nondeterminacy",id:"nondeterminacy",level:3},{value:"Summary and Concluding Remarks",id:"summary-and-concluding-remarks",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"control-flow",children:"Control Flow"}),"\n",(0,t.jsx)(n.p,{children:"the language mechanisms used to specify ordering into several categories:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sequencing"}),"\n",(0,t.jsx)(n.li,{children:"Selection"}),"\n",(0,t.jsx)(n.li,{children:"Iteration"}),"\n",(0,t.jsx)(n.li,{children:"Procedural abstraction"}),"\n",(0,t.jsx)(n.li,{children:"Recursion"}),"\n",(0,t.jsx)(n.li,{children:"Concurrency"}),"\n",(0,t.jsx)(n.li,{children:"Exception handling and speculation"}),"\n",(0,t.jsx)(n.li,{children:"Nondeterminacy"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"expression-evaluation",children:"Expression Evaluation"}),"\n",(0,t.jsx)(n.p,{children:"An expression generally consists of either a simple object (e.g., a literal constant, or a named variable or constant) or an operator or function applied to a collection of operands or arguments, each of which in turn is an expression."}),"\n",(0,t.jsx)(n.h4,{id:"precedence-and-associativity",children:"Precedence and Associativity"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd0\u7b97\u7b26\u7684\u4f18\u5148\u7ea7\u548c\u7ed3\u5408\u6027"}),"\n",(0,t.jsx)(n.h4,{id:"assignments",children:"Assignments"}),"\n",(0,t.jsxs)(n.p,{children:["computation typically consists of an ordered series of changes to the values of variables in memory. ",(0,t.jsx)(n.strong,{children:"Assignments"})," provide the principal means by which to make the changes."]}),"\n",(0,t.jsx)(n.h5,{id:"side-effect",children:"side effect"}),"\n",(0,t.jsxs)(n.p,{children:["Assignment is perhaps the most fundamental ",(0,t.jsx)(n.strong,{children:"side effect"}),": while the evaluation of an assignment may sometimes yield a value, what we really care about is the fact that it changes the value of a variable, thereby influencing the result of any later computation in\nwhich the variable appears."]}),"\n",(0,t.jsx)(n.h5,{id:"references-and-values",children:"References and Values"}),"\n",(0,t.jsx)(n.p,{children:"there are some subtle but important differences in the semantics of assignment in different imperative languages. These differences are often invisible, because they do not affect the behavior of simple programs."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u503c\u4f20\u9012\u548c\u5f15\u7528\u4f20\u9012"}),"\n",(0,t.jsx)(n.li,{children:"\u5de6\u503c\u548c\u53f3\u503c"}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"boxing",children:"Boxing"}),"\n",(0,t.jsx)(n.p,{children:"\u57fa\u7840\u7c7b\u578b\u7684\u62c6\u88c5\u7bb1"}),"\n",(0,t.jsx)(n.h4,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsx)(n.p,{children:"There are several reasons, however, why such initial values may be useful:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u9759\u6001\u53d8\u91cf\u9700\u8981\u521d\u59cb\u5316"}),"\n",(0,t.jsx)(n.li,{children:"\u7f16\u8bd1\u5668\u9884\u5206\u914d\u521d\u59cb\u5316\u503c\u4f18\u5316\uff08Java Integer\u9884\u5206\u914d\uff09"}),"\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u672a\u521d\u59cb\u5316\u53d8\u91cf\u5f15\u8d77\u7684\u95ee\u9898"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It should be emphasized that initialization saves time ",(0,t.jsx)(n.strong,{children:"only"})," for variables that are ",(0,t.jsx)(n.strong,{children:"statically allocated"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If a variable is not given an initial value explicitly in its declaration, the language may specify a ",(0,t.jsx)(n.strong,{children:"default value"}),"."]}),"\n",(0,t.jsx)(n.h5,{id:"dynamic-checks",children:"Dynamic Checks"}),"\n",(0,t.jsxs)(n.p,{children:["Instead of giving every uninitialized variable a default value, a language or implementation can choose to define the use of an uninitialized variable as a ",(0,t.jsx)(n.strong,{children:"dynamic semantic error"}),", and can catch these errors at run time."]}),"\n",(0,t.jsx)(n.h5,{id:"definite-assignment",children:"Definite Assignment"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u63a7\u5236\u6d41\u5206\u6790\u9759\u6001\u68c0\u6d4b\u672a\u521d\u59cb\u5316\u53d8\u91cf\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"This notion is based on the control flow of the program, and can be statically checked by the compiler."}),"\n",(0,t.jsx)(n.h5,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsx)(n.p,{children:"\u6784\u9020\u5668\u9ed8\u8ba4\u521d\u59cb\u5316\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:["Many object-oriented languages (Java and C# among them) allow the programmer to define types for which initialization of ",(0,t.jsx)(n.strong,{children:"dynamically allocated variables occurs automatically"}),", even when ",(0,t.jsx)(n.strong,{children:"no initial value is specified in the declaration"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"ordering-within-expressions",children:"Ordering within Expressions"}),"\n",(0,t.jsx)(n.p,{children:"\u8868\u8fbe\u5f0f\u5185\u6c42\u503c\u91cd\u8981\u7684\u539f\u56e0\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Side effects: \u8868\u8fbe\u5f0f\u5185\u51fd\u6570\u6c42\u503c\u526f\u4f5c\u7528"}),"\n",(0,t.jsx)(n.li,{children:"Code improvement: \u6c42\u503c\u987a\u5e8f\u548c\u7f16\u8bd1\u5668\u4f18\u5316"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"applying-mathematical-identities\u6570\u5b66\u6052\u7b49\u5f0f",children:"Applying Mathematical Identities\uff08\u6570\u5b66\u6052\u7b49\u5f0f\uff09"}),"\n",(0,t.jsx)(n.p,{children:"\u8868\u8fbe\u5f0f\u4f18\u5316\u5f71\u54cd\u6c42\u503c\u987a\u5e8f\u4f1a\u5bfc\u81f4\u7cbe\u5ea6\u95ee\u9898"}),"\n",(0,t.jsx)(n.h4,{id:"short-circuit-evaluation\u77ed\u8def\u8868\u8fbe\u5f0f",children:"Short-Circuit Evaluation\uff08\u77ed\u8def\u8868\u8fbe\u5f0f\uff09"}),"\n",(0,t.jsxs)(n.p,{children:["A compiler that performs ",(0,t.jsx)(n.em,{children:"short-circuit evaluation"})," of Boolean expressions will generate code that skips the second half of both of these computations when the overall value can be determined from the first half."]}),"\n",(0,t.jsx)(n.h3,{id:"structured-and-unstructured-flow",children:"Structured and Unstructured Flow"}),"\n",(0,t.jsx)(n.p,{children:"\u6c47\u7f16\u4e2d\u4f7f\u7528\u7684goto\uff08\u975e\u7ed3\u6784\u5316\uff09\u7f16\u7a0b\u88ab\u9ad8\u7ea7\u8bed\u8a00\u629b\u5f03\uff08\u7ed3\u6784\u5316\u7f16\u7a0b\uff09"}),"\n",(0,t.jsx)(n.h4,{id:"structured-alternatives-to-goto",children:"Structured Alternatives to goto"}),"\n",(0,t.jsxs)(n.p,{children:["Where once a goto might have been used to escape from the middle of a loop, most modern languages provide a ",(0,t.jsx)(n.strong,{children:"break"})," or ",(0,t.jsx)(n.strong,{children:"exit"})," statement for this purpose."]}),"\n",(0,t.jsx)(n.h4,{id:"multilevel-returns",children:"Multilevel Returns"}),"\n",(0,t.jsx)(n.p,{children:"return\u548c local goto\u90fd\u53ef\u4ee5\u4ece\u5f53\u524d\u5b50\u7a0b\u5e8f\u4e2d\u8fd4\u56de\uff0c\u4f46\u662f nonlocal goto\u4f1a\u7834\u574f\u8fd9\u79cd\u60c5\u51b5\uff0c\u5982\u679c\u76f4\u63a5goto\u5230\u5176\u4ed6\u5b50\u7a0b\u5e8f\u4e2d\u4f1a\u7834\u574f\u5f53\u524d\u5b50\u7a0b\u5e8f\u5806\u6808\uff0c\u8fd8\u9700\u8981\u7acb\u523b\u52a0\u8f7d\u53e6\u4e00\u4e2a\u5b50\u7a0b\u5e8f\u7684\u5806\u6808\u3002\u5982\u679c\u4f7f\u7528return\u8fd9\u4e9b\u90fd\u662f\u5728\u6267\u884c\u5230return\u5173\u952e\u5b57\u65f6\u624d\u53d1\u751f\u7684\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"errors-and-other-exceptions",children:"Errors and Other Exceptions"}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981Exceptions\u7684\u539f\u56e0\uff1a"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["In a related and arguably more common situation, a deeply nested block or subroutine may discover that it is ",(0,t.jsx)(n.strong,{children:"unable to proceed with its usual function"}),", and moreover lacks the contextual information it would ",(0,t.jsx)(n.strong,{children:"need to recover"})," in any graceful way."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["As a structured alternative, many modern languages provide an ",(0,t.jsx)(n.strong,{children:"exception-handling"})," mechanism for convenient, nonlocal recovery from exceptions."]}),"\n",(0,t.jsx)(n.p,{children:"\u5927\u591a\u6570\u8bed\u8a00\u53ea\u63d0\u4f9b\u5f02\u5e38\u673a\u5236\u800c\u4e0d\u63d0\u4f9b\u4ece\u591a\u7ea7\u8c03\u7528\u4e2d\u76f4\u63a5return\u7684\u673a\u5236\uff08\u60f3\u76f4\u63a5\u8df3\u51fa\u591a\u7ea7\u8c03\u7528\u53ea\u80fd\u629b\u5f02\u5e38\uff09\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"continuations",children:"Continuations"}),"\n",(0,t.jsx)(n.p,{children:"The notion of nonlocal gotos that unwind the stack can be generalized by defining what are known as continuations."}),"\n",(0,t.jsx)(n.p,{children:"call/cc => \u63a7\u5236\u6d41\u53d8\u6362\uff1a"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728 Scheme \u4e2d\uff0c\u5047\u8bbe call/cc \u6355\u6349\u5230\u7684 current continuation \u4e3a cc(\u4f4d\u4e8e lambda \u4e2d)\uff0c\u5982\u679c cc \u4f5c\u4e3a\u8fc7\u7a0b \u76f4\u63a5\u6216\u95f4\u63a5\u5730\u88ab\u8c03\u7528\uff08\u5373\u7ed9\u5b83\u4f20\u503c\uff09\uff0ccall/cc \u4f1a\u7acb\u5373\u8fd4\u56de\uff0c\u8fd4\u56de\u503c\u5373\u4e3a\u4f20\u5165 cc \u7684\u503c\u3002\u5373\u4e00\u65e6 current continuation \u88ab\u8c03\u7528\uff0c\u63a7\u5236\u6d41\u4f1a\u8df3\u5230 call/cc \u5904\u3002\u56e0\u6b64\uff0c\u5229\u7528 call/cc\uff0c\u6211\u4eec\u53ef\u4ee5\u6446\u8131\u987a\u5e8f\u6267\u884c\u7684\u9650\u5236\uff0c\u5728\u7a0b\u5e8f\u4e2d\u8df3\u6765\u8df3\u53bb\uff0c\u975e\u5e38\u7075\u6d3b\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sequencing",children:"Sequencing"}),"\n",(0,t.jsxs)(n.p,{children:["Like assignment, sequencing is central to imperative programming. It is the principal means of controlling ",(0,t.jsx)(n.strong,{children:"the order in which side effects"})," (e.g.,assignments) occur"]}),"\n",(0,t.jsx)(n.p,{children:"\u987a\u5e8f\u548c\u526f\u4f5c\u7528\uff0c\u65e0\u526f\u4f5c\u7528\u51fd\u6570\u53ef\u4ee5\u8fdb\u884c\u6307\u4ee4\u91cd\u6392\u63d0\u5347\u6027\u80fd\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"selection",children:"Selection"}),"\n",(0,t.jsx)(n.h4,{id:"short-circuited-conditions",children:"Short-Circuited Conditions"}),"\n",(0,t.jsx)(n.p,{children:"\u867d\u7136if else\u8bed\u53e5\u4e2d\u5305\u542b\u4e00\u4e2a\u5e03\u5c14\u8868\u8fbe\u5f0f\uff0c\u4f46\u662f\u901a\u5e38\u4e0d\u9700\u8981\u5c06\u5176\u7ed3\u679c\u89e3\u6790\u51fa\u6765\u653e\u5728\u5bc4\u5b58\u5668\u4e2d\uff0c\u800c\u662f\u62c6\u5206\u5e03\u5c14\u8868\u8fbe\u5f0f\u7528\u6765\u63a7\u5236\u4ee3\u7801\u8df3\u8f6c\uff08\u901a\u8fc7\u77ed\u8def\u8868\u8fbe\u5f0f\u6765\u4f18\u5316\u4ee3\u7801\uff09\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"caseswitch-statements",children:"Case/Switch Statements"}),"\n",(0,t.jsx)(n.p,{children:"if else\u8bed\u53e5\u8fc7\u957f\u65f6\u53ef\u80fd\u4f1a\u88ab\u4f18\u5316\u6210 switch/case \u8bed\u53e5\uff08\u901a\u8fc7\u67e5\u8868\u6765\u4f18\u5316\u4ee3\u7801\u6027\u80fd\uff09\u3002"}),"\n",(0,t.jsx)(n.p,{children:"case\u67e5\u8868\u4e5f\u9700\u8981\u4f18\u5316\u6027\u80fd\uff08\u5982\u679c\u9759\u6001\u503c\u8303\u56f4\u7a00\u758f\u3002\u3002\u3002\uff09"}),"\n",(0,t.jsx)(n.h3,{id:"iteration",children:"Iteration"}),"\n",(0,t.jsx)(n.p,{children:"Iteration and recursion are the two mechanisms that allow a computer to perform similar operations repeatedly."}),"\n",(0,t.jsx)(n.h4,{id:"enumeration-controlled-loopsfor\u5faa\u73af",children:"Enumeration-Controlled Loops\uff08for\u5faa\u73af\uff09"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u7f16\u8bd1\u5668\u751f\u6210\u4ee3\u7801\u65f6\u7684\u4e00\u4e2a\u53ef\u80fd\u7684\u4f18\u5316\u662f\u9884\u5148\u8ba1\u7b97\u8fed\u4ee3\u6b21\u6570\uff1a",(0,t.jsx)(n.code,{children:"max([last-first+step]/step, 0)"})]}),"\n",(0,t.jsx)(n.p,{children:"\u679a\u4e3e\u63a7\u5236\u5faa\u73af\u7684\u51e0\u4e2a\u8bbe\u8ba1\u95ee\u9898\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Can control enter or leave the loop in any way other than through the enumeration mechanism? => break/exit"}),"\n",(0,t.jsx)(n.li,{children:"What happens if the loop body modifies variables that were used to compute the end-of-loop bound? => \u4e0d\u5141\u8bb8"}),"\n",(0,t.jsx)(n.li,{children:"What happens if the loop body modifies the index variable itself? => \u7981\u6b62\u5728\u5faa\u73af\u4f53\u5185\u81ea\u5df1\u66f4\u65b0\u7d22\u5f15"}),"\n",(0,t.jsx)(n.li,{children:"Can the program read the index variable after the loop has completed, and if so, what will its value be? => \u5faa\u73af\u7ed3\u675f\u540e\u7d22\u5f15\u503c\u662f\u672a\u5b9a\u4e49\u7684"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"combination-loops",children:"Combination Loops"}),"\n",(0,t.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49\u6b65\u957f\u7684for\u5faa\u73af"}),"\n",(0,t.jsx)(n.h4,{id:"iterators",children:"Iterators"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"range()"}),"\n",(0,t.jsx)(n.li,{children:"\u5bf9\u8c61\u8fed\u4ee3\u5668"}),"\n",(0,t.jsx)(n.li,{children:"\u60f0\u6027\u8fed\u4ee3\u6d41"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"recursion-\u9012\u5f52",children:"Recursion \u9012\u5f52"}),"\n",(0,t.jsx)(n.h4,{id:"iteration-and-recursion",children:"Iteration and Recursion"}),"\n",(0,t.jsx)(n.p,{children:"Iteration is in some sense the more \u201cnatural\u201d of the two in imperative languages, because it is based on the repeated modification of variables."}),"\n",(0,t.jsx)(n.p,{children:"Recursion is the more natural of the two in functional languages, because it does not change variables."}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u5e38\u8ba4\u4e3a\u8fed\u4ee3\u6bd4\u9012\u5f52\u66f4\u9ad8\u6548\uff0c\u4f46\u662f\u7f16\u8bd1\u5668\u4f18\u5316\u4e5f\u53ef\u4ee5\u751f\u6210\u9ad8\u6548\u7684\u9012\u5f52\u4ee3\u7801\uff0c\u7279\u522b\u662f\u5c3e\u9012\u5f52\u4ee3\u7801\u7684\u4f18\u5316\uff08\u4e0d\u9700\u8981\u989d\u5916\u751f\u6210\u65b0\u7684\u51fd\u6570\u5806\u6808\uff0c\u53ef\u4ee5\u91cd\u7528\u5f53\u524d\u51fd\u6570\u7684\u6808\u7a7a\u95f4\uff09"}),"\n",(0,t.jsx)(n.p,{children:"\u7f16\u8bd1\u5668\u4e5f\u53ef\u4ee5\u4f18\u5316\u975e\u5c3e\u9012\u5f52\u4ee3\u7801\uff0c\u8f6c\u6362\u4e3a\u5c3e\u9012\u5f52\u4ee3\u7801\u6267\u884c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u9012\u5f52\u601d\u60f3\u601d\u8003\u4ee3\u7801\uff08\u6ca1\u6709\u526f\u4f5c\u7528\u7684\u9012\u5f52\uff09\u53ef\u4ee5\u4ea7\u751f\u66f4\u5c11\u7684bug\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"applicative--and-normal-order-evaluation",children:"Applicative- and Normal-Order Evaluation"}),"\n",(0,t.jsxs)(n.p,{children:["Throughout the discussion so far we have assumed implicitly that arguments are ",(0,t.jsx)(n.strong,{children:"evaluated before passing them to a subroutine"}),". This need not be the case. It is possible to ",(0,t.jsx)(n.strong,{children:"pass a representation of the unevaluated arguments to the subroutine"})," instead, and to evaluate them only when (if) the value is actually needed."]}),"\n",(0,t.jsx)(n.p,{children:"\u60f0\u6027\u6c42\u503c"}),"\n",(0,t.jsx)(n.h3,{id:"nondeterminacy",children:"Nondeterminacy"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u786e\u5b9a\u7684\u63a7\u5236\u6d41\uff08\u8fd0\u884c\u65f6\u624d\u80fd\u786e\u5b9a\uff09\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"summary-and-concluding-remarks",children:"Summary and Concluding Remarks"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u7f16\u7a0b\u8bed\u8a00\u4e2d\u53d1\u73b0\u7684\u4e3b\u8981\u63a7\u5236\u6d41\u5f62\u5f0f\uff1a\u987a\u5e8f\u3001\u9009\u62e9\u3001\u8fed\u4ee3\u3001\u7a0b\u5e8f\u62bd\u8c61\u3001\u9012\u5f52\u3001\u5e76\u53d1\u3001\u5f02\u5e38\u5904\u7406\u548c\u63a8\u6d4b\u4ee5\u53ca\u4e0d\u786e\u5b9a\u6027\u3002\u987a\u5e8f\u6307\u5b9a\u67d0\u4e9b\u64cd\u4f5c\u6309\u987a\u5e8f\u53d1\u751f\uff0c\u4e00\u4e2a\u63a5\u4e00\u4e2a\u3002\u9009\u62e9\u8868\u8fbe\u4e86\u5728\u4e24\u4e2a\u6216\u66f4\u591a\u63a7\u5236\u6d41\u66ff\u4ee3\u65b9\u6848\u4e4b\u95f4\u7684\u9009\u62e9\u3002\u8fed\u4ee3\u548c\u9012\u5f52\u662f\u91cd\u590d\u6267\u884c\u64cd\u4f5c\u7684\u4e24\u79cd\u65b9\u5f0f\u3002\u9012\u5f52\u4ee5\u81ea\u8eab\u7684\u7b80\u5355\u5b9e\u4f8b\u5b9a\u4e49\u64cd\u4f5c\uff1b\u5b83\u4f9d\u8d56\u4e8e\u7a0b\u5e8f\u62bd\u8c61\u3002\u8fed\u4ee3\u91cd\u590d\u4e00\u4e2a\u64cd\u4f5c\u4ee5\u83b7\u5f97\u5176\u526f\u4f5c\u7528\u3002\u987a\u5e8f\u548c\u8fed\u4ee3\u662f\u547d\u4ee4\u5f0f\uff08\u7279\u522b\u662f\u51af\xb7\u8bfa\u4f9d\u66fc\uff09\u7f16\u7a0b\u7684\u57fa\u7840\u3002\u9012\u5f52\u662f\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u57fa\u7840\u3002\u4e0d\u786e\u5b9a\u6027\u5141\u8bb8\u7a0b\u5e8f\u5458\u6545\u610f\u4e0d\u6307\u5b9a\u63a7\u5236\u6d41\u7684\u67d0\u4e9b\u65b9\u9762\u3002\u6211\u4eec\u53ea\u7b80\u8981\u5730\u89e6\u53ca\u4e86\u5e76\u53d1\uff1b\u5b83\u5c06\u662f\u7b2c12\u7ae0\u7684\u4e3b\u9898\u3002\u7a0b\u5e8f\u62bd\u8c61\uff08\u5b50\u7a0b\u5e8f\uff09\u662f\u7b2c8\u7ae0\u7684\u4e3b\u9898\u3002\u5f02\u5e38\u5904\u7406\u548c\u63a8\u6d4b\u5c06\u5728\u7b2c8.5\u8282\u548c\u7b2c12.4.4\u8282\u4e2d\u4ecb\u7ecd\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6211\u4eec\u5bf9\u63a7\u5236\u6d41\u673a\u5236\u7684\u8c03\u67e5\u4e4b\u524d\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86\u8868\u8fbe\u5f0f\u8bc4\u4f30\u3002\u6211\u4eec\u8003\u8651\u4e86\u5de6\u503c\u548c\u53f3\u503c\u4e4b\u95f4\u7684\u533a\u522b\uff0c\u4ee5\u53ca\u53d8\u91cf\u7684\u503c\u6a21\u578b\u548c\u5f15\u7528\u6a21\u578b\u4e4b\u95f4\u7684\u533a\u522b\uff0c\u5728\u503c\u6a21\u578b\u4e2d\uff0c\u53d8\u91cf\u662f\u6570\u636e\u7684\u547d\u540d\u5bb9\u5668\uff0c\u5728\u5f15\u7528\u6a21\u578b\u4e2d\uff0c\u53d8\u91cf\u662f\u5bf9\u6570\u636e\u5bf9\u8c61\u7684\u5f15\u7528\u3002\u6211\u4eec\u8003\u8651\u4e86\u8868\u8fbe\u5f0f\u5185\u7684\u4f18\u5148\u7ea7\u3001\u7ed3\u5408\u6027\u548c\u6392\u5e8f\u95ee\u9898\u3002\u6211\u4eec\u68c0\u67e5\u4e86\u77ed\u8def\u5e03\u5c14\u8bc4\u4f30\u53ca\u5176\u901a\u8fc7\u8df3\u8f6c\u4ee3\u7801\u7684\u5b9e\u73b0\uff0c\u8fd9\u65e2\u662f\u4e00\u4e2a\u5f71\u54cd\u8868\u8fbe\u5f0f\u6b63\u786e\u6027\u7684\u8bed\u4e49\u95ee\u9898\uff08\u5176\u5b50\u90e8\u5206\u5e76\u975e\u603b\u662f\u5b9a\u4e49\u826f\u597d\uff09\uff0c\u4e5f\u662f\u4e00\u4e2a\u5f71\u54cd\u8bc4\u4f30\u590d\u6742\u5e03\u5c14\u8868\u8fbe\u5f0f\u6240\u9700\u65f6\u95f4\u7684\u5b9e\u73b0\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6784\u9020\u7684\u53d1\u5c55\u53d7\u5230\u4e86\u8bb8\u591a\u76ee\u6807\u7684\u9a71\u52a8\uff0c\u5305\u62ec\u7f16\u7a0b\u7684\u4fbf\u5229\u6027\u3001\u8bed\u4e49\u7684\u4f18\u96c5\u6027\u3001\u5b9e\u73b0\u7684\u4fbf\u5229\u6027\u548c\u8fd0\u884c\u65f6\u6548\u7387\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e9b\u76ee\u6807\u88ab\u8bc1\u660e\u662f\u4e92\u8865\u7684\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u5df2\u7ecf\u770b\u5230\u77ed\u8def\u8bc4\u4f30\u65e2\u5bfc\u81f4\u66f4\u5feb\u7684\u4ee3\u7801\uff0c\u4e5f\uff08\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff09\u5bfc\u81f4\u66f4\u6e05\u6670\u7684\u8bed\u4e49\u3002\u540c\u6837\u5730\uff0c\u4e3a\u679a\u4e3e\u63a7\u5236\u5faa\u73af\u7684\u7d22\u5f15\u53d8\u91cf\u5f15\u5165\u4e00\u4e2a\u65b0\u7684\u5c40\u90e8\u4f5c\u7528\u57df\uff0c\u907f\u514d\u4e86\u5faa\u73af\u540e\u7d22\u5f15\u503c\u7684\u8bed\u4e49\u95ee\u9898\u548c\uff08\u5728\u67d0\u79cd\u7a0b\u5ea6\u4e0a\uff09\u6f5c\u5728\u6ea2\u51fa\u7684\u5b9e\u73b0\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0c\u8bed\u8a00\u8bed\u4e49\u7684\u6539\u8fdb\u88ab\u8ba4\u4e3a\u503c\u5f97\u5728\u8fd0\u884c\u65f6\u6548\u7387\u4e0a\u4ed8\u51fa\u4e00\u70b9\u5c0f\u4ee3\u4ef7\u3002\u6211\u4eec\u5728\u8fed\u4ee3\u5668\u7684\u53d1\u5c55\u4e2d\u770b\u5230\u4e86\u8fd9\u4e00\u70b9\uff1a\u50cf\u8bb8\u591a\u5f62\u5f0f\u7684\u62bd\u8c61\u4e00\u6837\uff0c\u5b83\u4eec\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\u589e\u52a0\u4e86\u9002\u5ea6\u7684\u8fd0\u884c\u65f6\u6210\u672c\uff08\u4f8b\u5982\uff0c\u4e0e\u663e\u5f0f\u5d4c\u5165\u679a\u4e3e\u96c6\u5408\u7684\u5b9e\u73b0\u5230\u5faa\u73af\u7684\u63a7\u5236\u6d41\u4e2d\u76f8\u6bd4\uff09\uff0c\u4f46\u5374\u5e26\u6765\u4e86\u6a21\u5757\u5316\u3001\u6e05\u6670\u6027\u548c\u4ee3\u7801\u91cd\u7528\u673a\u4f1a\u7684\u5de8\u5927\u56de\u62a5\u3002\u540c\u6837\u5730\uff0cJava\u7684\u5f00\u53d1\u8005\u4f1a\u8fa9\u79f0\uff0c\u5bf9\u4e8e\u8bb8\u591a\u5e94\u7528\u7a0b\u5e8f\u6765\u8bf4\uff0c\u901a\u8fc7\u5e7f\u6cdb\u7684\u8bed\u4e49\u68c0\u67e5\u3001\u6807\u51c6\u683c\u5f0f\u7684\u6570\u503c\u7c7b\u578b\u7b49\u63d0\u4f9b\u7684\u53ef\u79fb\u690d\u6027\u548c\u5b89\u5168\u6027\u8fdc\u6bd4\u901f\u5ea6\u66f4\u91cd\u8981\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7f16\u8bd1\u5668\u6280\u672f\u7684\u8fdb\u6b65\u6216\u8bbe\u8ba1\u8005\u6784\u5efa\u66f4\u590d\u6742\u7f16\u8bd1\u5668\u7684\u7b80\u5355\u610f\u613f\uff0c\u4f7f\u5f97\u6574\u5408\u66fe\u88ab\u8ba4\u4e3a\u8fc7\u4e8e\u6602\u8d35\u7684\u529f\u80fd\u6210\u4e3a\u53ef\u80fd\u3002Ada\u4e2d\u7684\u6848\u4f8b\u8bed\u53e5\u7684\u6807\u7b7e\u8303\u56f4\u8981\u6c42\u7f16\u8bd1\u5668\u51c6\u5907\u751f\u6210\u91c7\u7528\u4e8c\u8fdb\u5236\u641c\u7d22\u7684\u4ee3\u7801\u3002C++\u4e2d\u7684\u5185\u8054\u51fd\u6570\u6d88\u9664\u4e86\u5728\u5fae\u5c0f\u51fd\u6570\u7684\u4f4e\u6548\u7387\u548c\u5b8f\u7684\u6df7\u4e71\u8bed\u4e49\u4e4b\u95f4\u9009\u62e9\u7684\u9700\u8981\u3002\u5f02\u5e38\uff08\u5982\u6211\u4eec\u5c06\u5728\u7b2c8.5.3\u8282\u4e2d\u770b\u5230\uff09\u53ef\u4ee5\u4ee5\u8fd9\u6837\u4e00\u79cd\u65b9\u5f0f\u5b9e\u73b0\uff0c\u5373\u5728\u5e38\u89c1\u60c5\u51b5\u4e0b\uff08\u5f53\u5b83\u4eec\u4e0d\u53d1\u751f\u65f6\uff09\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u6210\u672c\uff0c\u4f46\u5b9e\u73b0\u76f8\u5f53\u590d\u6742\u3002\u8fed\u4ee3\u5668\u3001\u88c5\u7bb1\u3001\u6cdb\u578b\uff08\u7b2c8.4\u8282\uff09\u548c\u4e00\u7ea7\u51fd\u6570\u540c\u6837\u76f8\u5f53\u590d\u6742\uff0c\u4f46\u5728\u4e3b\u6d41\u547d\u4ee4\u5f0f\u8bed\u8a00\u4e2d\u8d8a\u6765\u8d8a\u5e38\u89c1\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u4e9b\u5b9e\u73b0\u6280\u672f\uff08\u4f8b\u5982\uff0c\u91cd\u65b0\u6392\u5217\u8868\u8fbe\u5f0f\u4ee5\u53d1\u73b0\u516c\u5171\u5b50\u8868\u8fbe\u5f0f\uff0c\u6216\u8005\u5728\u627e\u5230\u53ef\u63a5\u53d7\u7684\u9009\u62e9\u540e\u907f\u514d\u5728\u4e0d\u786e\u5b9a\u6027\u6784\u9020\u4e2d\u8bc4\u4f30\u5b88\u536b\uff09\u8db3\u591f\u91cd\u8981\uff0c\u4ee5\u81f3\u4e8e\u53ef\u4ee5\u8bc1\u660e\u5bf9\u7a0b\u5e8f\u5458\u65bd\u52a0\u9002\u5ea6\u8d1f\u62c5\u662f\u5408\u7406\u7684\uff08\u4f8b\u5982\uff0c\u5728\u5fc5\u8981\u65f6\u6dfb\u52a0\u62ec\u53f7\u4ee5\u907f\u514d\u6ea2\u51fa\u6216\u786e\u4fdd\u6570\u503c\u7a33\u5b9a\u6027\uff0c\u6216\u786e\u4fdd\u5b88\u536b\u4e2d\u7684\u8868\u8fbe\u5f0f\u6ca1\u6709\u526f\u4f5c\u7528\uff09\u3002\u5176\u4ed6\u5728\u8bed\u4e49\u4e0a\u6709\u7528\u7684\u673a\u5236\uff08\u4f8b\u5982\uff0c\u60f0\u6027\u8bc4\u4f30\u3001\u7eed\u4f53\u6216\u771f\u6b63\u968f\u673a\u7684\u4e0d\u786e\u5b9a\u6027\uff09\u901a\u5e38\u88ab\u8ba4\u4e3a\u8db3\u591f\u590d\u6742\u6216\u6602\u8d35\uff0c\u53ea\u5728\u7279\u6b8a\u60c5\u51b5\u4e0b\u624d\u503c\u5f97\u4f7f\u7528\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u76f8\u5bf9\u539f\u59cb\u7684\u8bed\u8a00\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u53ef\u4ee5\u901a\u8fc7\u7f16\u7a0b\u7ea6\u5b9a\u83b7\u5f97\u4e00\u4e9b\u7f3a\u5931\u529f\u80fd\u7684\u597d\u5904\u3002\u4f8b\u5982\uff0c\u5728\u65e9\u671f\u7684Fortran\u65b9\u8a00\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u9650\u5236goto\u7684\u4f7f\u7528\uff0c\u4ee5\u6a21\u4eff\u66f4\u73b0\u4ee3\u8bed\u8a00\u7684\u63a7\u5236\u6d41\u3002\u5728\u6ca1\u6709\u77ed\u8def\u8bc4\u4f30\u7684\u8bed\u8a00\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u5d4c\u5957\u7684\u9009\u62e9\u8bed\u53e5\u3002\u5728\u6ca1\u6709\u8fed\u4ee3\u5668\u7684\u8bed\u8a00\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u4e00\u7ec4\u63d0\u4f9b\u7b49\u6548\u529f\u80fd\u7684\u5b50\u7a0b\u5e8f\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var t=i(7294);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);