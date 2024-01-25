"use strict";(self.webpackChunkmy_knowledge_repo=self.webpackChunkmy_knowledge_repo||[]).push([[5585],{46:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=s(5893),a=s(1151);const r={title:"Crafting Interpreters \u7b14\u8bb0",tags:["\u7f16\u8bd1\u5668","Crafting Interpreters"]},i=void 0,l={permalink:"/blog/2024/crafting-interpreters-notes",source:"@site/blog/2024/crafting-interpreters-notes.md",title:"Crafting Interpreters \u7b14\u8bb0",description:"Scanning",date:"2024-01-25T08:06:02.000Z",formattedDate:"2024\u5e741\u670825\u65e5",tags:[{label:"\u7f16\u8bd1\u5668",permalink:"/blog/tags/\u7f16\u8bd1\u5668"},{label:"Crafting Interpreters",permalink:"/blog/tags/crafting-interpreters"}],readingTime:10.975,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Crafting Interpreters \u7b14\u8bb0",tags:["\u7f16\u8bd1\u5668","Crafting Interpreters"]},unlisted:!1,nextItem:{title:"Programming Language Pragmatics \u7b2c\u4e00\u7ae0\u7b14\u8bb0\u4e0a",permalink:"/blog/2024/programming-language-pragmatics-01"}},c={authorsImageUrls:[]},o=[{value:"Scanning",id:"scanning",level:2},{value:"Representing Code",id:"representing-code",level:2},{value:"Parsing Expressions",id:"parsing-expressions",level:2},{value:"Recursive Descent Parsing",id:"recursive-descent-parsing",level:3},{value:"Evaluating Expressions",id:"evaluating-expressions",level:2},{value:"Statements and State",id:"statements-and-state",level:2},{value:"Environments",id:"environments",level:3},{value:"Scope",id:"scope",level:3},{value:"Control Flow",id:"control-flow",level:2},{value:"IF",id:"if",level:3},{value:"Functions",id:"functions",level:2},{value:"Function Objects",id:"function-objects",level:3},{value:"Classes",id:"classes",level:2},{value:"Creating Instances",id:"creating-instances",level:3}];function d(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"scanning",children:"Scanning"}),"\n",(0,t.jsx)(e.p,{children:"\u4efb\u4f55\u7f16\u8bd1\u5668\u6216\u89e3\u91ca\u5668\u7684\u7b2c\u4e00\u6b65\u90fd\u662f\u626b\u63cf\u3002\u626b\u63cf\u5668\u5c06\u539f\u59cb\u6e90\u4ee3\u7801\u4f5c\u4e3a\u4e00\u7cfb\u5217\u5b57\u7b26\u8f93\u5165\uff0c\u5e76\u5c06\u5176\u5206\u7ec4\u4e3a\u4e00\u7cfb\u5217\u6211\u4eec\u79f0\u4e4b\u4e3a\u6807\u8bb0\u7684\u5757\u3002\u8fd9\u4e9b\u662f\u6784\u6210\u8bed\u8a00\u8bed\u6cd5\u7684\u6709\u610f\u4e49\u7684\u201c\u5355\u8bcd\u201d\u548c\u201c\u6807\u70b9\u7b26\u53f7\u201d\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e00\u9636\u6bb5\u7684\u91cd\u70b9\u662f\u628a\u5b57\u7b26\u6570\u7ec4\u8f6c\u6362\u6210token\u5e8f\u5217\uff0c\u901a\u8fc7\u201c\u53cc\u6307\u9488\u201d\u7684\u65b9\u5f0f\u9010\u6b65\u6d88\u8017\u5b57\u7b26\u3002"}),"\n",(0,t.jsx)(e.p,{children:"Token\u7c7b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"class Token {\n  final TokenType type;\n  final String lexeme;\n  final Object literal;\n  final int line; \n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"TokenType:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"enum TokenType {\n  // Single-character tokens.\n  LEFT_PAREN, RIGHT_PAREN, LEFT_BRACE, RIGHT_BRACE,\n  COMMA, DOT, MINUS, PLUS, SEMICOLON, SLASH, STAR,\n\n  // One or two character tokens.\n  BANG, BANG_EQUAL,\n  EQUAL, EQUAL_EQUAL,\n  GREATER, GREATER_EQUAL,\n  LESS, LESS_EQUAL,\n\n  // Literals.\n  IDENTIFIER, STRING, NUMBER,\n\n  // Keywords.\n  AND, CLASS, ELSE, FALSE, FUN, FOR, IF, NIL, OR,\n  PRINT, RETURN, SUPER, THIS, TRUE, VAR, WHILE,\n\n  EOF\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5904\u7406\u65b9\u5f0f\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"  private void scanToken() {\n    char c = advance();\n    switch (c) {\n      case '(': addToken(LEFT_PAREN); break;      \n      case '!':\n        addToken(match('=') ? BANG_EQUAL : BANG);\n        break;\n    }\n  }\n"})}),"\n",(0,t.jsx)(e.h2,{id:"representing-code",children:"Representing Code"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u4e0a\u4e00\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u539f\u59cb\u6e90\u4ee3\u7801\u4f5c\u4e3a\u5b57\u7b26\u4e32\uff0c\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u7a0d\u5fae\u66f4\u9ad8\u7ea7\u7684\u8868\u793a\u5f62\u5f0f\uff1a\u4e00\u7cfb\u5217\u6807\u8bb0\u3002\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u7ae0\u4e2d\u7f16\u5199\u7684\u89e3\u6790\u5668\u5c06\u83b7\u53d6\u8fd9\u4e9b\u6807\u8bb0\uff0c\u5e76\u518d\u6b21\u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\u66f4\u4e30\u5bcc\u3001\u66f4\u590d\u6742\u7684\u8868\u793a\u5f62\u5f0f\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u6211\u4eec\u80fd\u591f\u751f\u6210\u8be5\u8868\u793a\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u5b83\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u9700\u8981\u4e00\u628a\u66f4\u5927\u7684\u9524\u5b50\uff0c\u800c\u90a3\u628a\u9524\u5b50\u5c31\u662f\u4e0a\u4e0b\u6587\u65e0\u5173\u6587\u6cd5\uff08CFG\uff09\u3002\u5b83\u662f\u5f62\u5f0f\u6587\u6cd5\u5de5\u5177\u7bb1\u4e2d\u7684\u4e0b\u4e00\u4e2a\u6700\u91cd\u8981\u7684\u5de5\u5177\u3002\u5f62\u5f0f\u6587\u6cd5\u4f7f\u7528\u4e00\u7ec4\u79f0\u4e3a\u201c\u5b57\u6bcd\u8868\u201d\u7684\u539f\u5b50\u7247\u6bb5\u3002\u7136\u540e\u5b83\u5b9a\u4e49\u4e86\u4e00\u7ec4\u901a\u5e38\u662f\u65e0\u9650\u7684\u201c\u5b57\u7b26\u4e32\u201d\uff0c\u8fd9\u4e9b\u5b57\u7b26\u4e32\u201c\u5c5e\u4e8e\u201d\u6587\u6cd5\u3002\u6bcf\u4e2a\u5b57\u7b26\u4e32\u90fd\u662f\u5b57\u6bcd\u8868\u4e2d\u7684\u201c\u5b57\u6bcd\u201d\u5e8f\u5217\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8bed\u8a00\u8bed\u6cd5\u7684BNF\u8868\u793a\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'expression     \u2192 literal\n               | unary\n               | binary\n               | grouping ;\n\nliteral        \u2192 NUMBER | STRING | "true" | "false" | "nil" ;\ngrouping       \u2192 "(" expression ")" ;\nunary          \u2192 ( "-" | "!" ) expression ;\nbinary         \u2192 expression operator expression ;\noperator       \u2192 "==" | "!=" | "<" | "<=" | ">" | ">="\n               | "+"  | "-"  | "*" | "/" ;\n'})}),"\n",(0,t.jsx)(e.h2,{id:"parsing-expressions",children:"Parsing Expressions"}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u89e3\u6790\u4e4b\u524d\u9664\u4e86\u8bed\u6cd5\u89c4\u5219\u8fd8\u9700\u8981\u786e\u5b9a\u5173\u952e\u5b57\u7684\u8fd0\u7b97\u4f18\u5148\u7ea7\u548c\u7ed3\u5408\u6027\uff08\u5de6\u7ed3\u5408\u3001\u53f3\u7ed3\u5408\uff09\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5c06\u4f18\u5148\u7ea7\u52a0\u5165\u8bed\u6cd5\u89c4\u5219\u4e4b\u540e\u53d8\u6210\u4e0b\u9762\u7684\u5f62\u5f0f\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:'expression     \u2192 equality ;\nequality       \u2192 comparison ( ( "!=" | "==" ) comparison )* ;\ncomparison     \u2192 term ( ( ">" | ">=" | "<" | "<=" ) term )* ;\nterm           \u2192 factor ( ( "-" | "+" ) factor )* ;\nfactor         \u2192 unary ( ( "/" | "*" ) unary )* ;\nunary          \u2192 ( "!" | "-" ) unary\n               | primary ;\nprimary        \u2192 NUMBER | STRING | "true" | "false" | "nil"\n               | "(" expression ")" ;\n'})}),"\n",(0,t.jsx)(e.h3,{id:"recursive-descent-parsing",children:"Recursive Descent Parsing"}),"\n",(0,t.jsx)(e.p,{children:"\u9012\u5f52\u4e0b\u964d\u6838\u5fc3\u6b65\u9aa4\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'  private Stmt declaration() {\n    try {\n//> Classes match-class\n      if (match(CLASS)) return classDeclaration();\n//< Classes match-class\n//> Functions match-fun\n      if (match(FUN)) return function("function");\n//< Functions match-fun\n      if (match(VAR)) return varDeclaration();\n\n      return statement();\n    } catch (ParseError error) {\n      synchronize();\n      return null;\n    }\n  }\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'  private Stmt classDeclaration() {\n    Token name = consume(IDENTIFIER, "Expect class name.");\n//> Inheritance parse-superclass\n\n    Expr.Variable superclass = null;\n    if (match(LESS)) {\n      consume(IDENTIFIER, "Expect superclass name.");\n      superclass = new Expr.Variable(previous());\n    }\n\n//< Inheritance parse-superclass\n    consume(LEFT_BRACE, "Expect \'{\' before class body.");\n\n    List<Stmt.Function> methods = new ArrayList<>();\n    while (!check(RIGHT_BRACE) && !isAtEnd()) {\n      methods.add(function("method"));\n    }\n\n    consume(RIGHT_BRACE, "Expect \'}\' after class body.");\n\n/* Classes parse-class-declaration < Inheritance construct-class-ast\n    return new Stmt.Class(name, methods);\n*/\n//> Inheritance construct-class-ast\n    return new Stmt.Class(name, superclass, methods);\n//< Inheritance construct-class-ast\n  }\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u89e3\u6790\u7684\u7ed3\u679c\u662f\u8fd4\u56de\u4e00\u4e2a\u8bed\u53e5\u5217\u8868\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"List<Stmt> statements = parser.parse();\n"})}),"\n",(0,t.jsx)(e.p,{children:"stmt\u7c7b\u662f\u4e00\u4e2a\u62bd\u8c61\u7c7b\uff0c\u88ab\u5404\u4e2a\u5177\u4f53\u7684\u8bed\u6cd5\u58f0\u660e\u5b9e\u73b0\uff0cclass\u7684\u5b9e\u73b0\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"  static class Class extends Stmt {\n    Class(Token name,\n          Expr.Variable superclass,\n          List<Stmt.Function> methods) {\n      this.name = name;\n      this.superclass = superclass;\n      this.methods = methods;\n    }\n\n    @Override\n    <R> R accept(Visitor<R> visitor) {\n      return visitor.visitClassStmt(this);\n    }\n\n    final Token name;\n    final Expr.Variable superclass;\n    final List<Stmt.Function> methods;\n  }\n"})}),"\n",(0,t.jsx)(e.h2,{id:"evaluating-expressions",children:"Evaluating Expressions"}),"\n",(0,t.jsx)(e.p,{children:"\u8bed\u8a00\u5b9e\u73b0\u6709\u5404\u79cd\u65b9\u5f0f\u8ba9\u8ba1\u7b97\u673a\u6267\u884c\u7528\u6237\u6e90\u4ee3\u7801\u7684\u547d\u4ee4\u3002\u5b83\u4eec\u53ef\u4ee5\u5c06\u5176\u7f16\u8bd1\u6210\u673a\u5668\u7801\uff0c\u7ffb\u8bd1\u6210\u53e6\u4e00\u79cd\u9ad8\u7ea7\u8bed\u8a00\uff0c\u6216\u5c06\u5176\u7b80\u5316\u4e3a\u67d0\u79cd\u5b57\u8282\u7801\u683c\u5f0f\uff0c\u4ee5\u4fbf\u865a\u62df\u673a\u8fd0\u884c\u3002\u7136\u800c\uff0c\u5bf9\u4e8e\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u89e3\u91ca\u5668\uff0c\u6211\u4eec\u5c06\u9009\u62e9\u6700\u7b80\u5355\u3001\u6700\u76f4\u63a5\u7684\u8def\u5f84\uff0c\u76f4\u63a5\u6267\u884c\u8bed\u6cd5\u6811\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u8bbf\u95ee\u8005\u6a21\u5f0f\u6765\u904d\u5386\u4e0a\u9762\u4ea7\u751f\u7684stmt\u5217\u8868\u76f4\u63a5\u8fdb\u884c\u6c42\u503c\uff0c\u4e00\u4e2a\u64cd\u4f5c\u7b26\u904d\u5386\u7684\u4f8b\u5b50\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"  @Override\n  public Object visitBinaryExpr(Expr.Binary expr) {\n    Object left = evaluate(expr.left);\n    Object right = evaluate(expr.right); \n\n    switch (expr.operator.type) {\n      case MINUS:\n        return (double)left - (double)right;\n      case SLASH:\n        return (double)left / (double)right;\n      case STAR:\n        return (double)left * (double)right;\n    }\n\n    // Unreachable.\n    return null;\n  }\n"})}),"\n",(0,t.jsx)(e.h2,{id:"statements-and-state",children:"Statements and State"}),"\n",(0,t.jsx)(e.p,{children:"\u4e3a\u4e86\u652f\u6301\u7ed1\u5b9a\uff0c\u6211\u4eec\u7684\u89e3\u91ca\u5668\u9700\u8981\u5185\u90e8\u72b6\u6001\u3002\u5f53\u4f60\u5728\u7a0b\u5e8f\u5f00\u5934\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf\u5e76\u5728\u7ed3\u5c3e\u5904\u4f7f\u7528\u5b83\u65f6\uff0c\u89e3\u91ca\u5668\u5fc5\u987b\u5728\u6b64\u671f\u95f4\u4fdd\u7559\u8be5\u53d8\u91cf\u7684\u503c\u3002\u56e0\u6b64\uff0c\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u8d4b\u4e88\u6211\u4eec\u7684\u89e3\u91ca\u5668\u4e00\u4e2a\u4e0d\u4ec5\u80fd\u5904\u7406\uff0c\u8fd8\u80fd\u8bb0\u4f4f\u7684\u5927\u8111\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u72b6\u6001\u548c\u8bed\u53e5\u662f\u76f8\u8f85\u76f8\u6210\u7684\u3002\u7531\u4e8e\u8bed\u53e5\u6839\u636e\u5b9a\u4e49\u4e0d\u4f1a\u8bc4\u4f30\u4e3a\u4e00\u4e2a\u503c\uff0c\u5b83\u4eec\u9700\u8981\u505a\u4e00\u4e9b\u5176\u4ed6\u7684\u4e8b\u60c5\u624d\u80fd\u53d1\u6325\u4f5c\u7528\u3002\u8fd9\u4e2a\u4e8b\u60c5\u88ab\u79f0\u4e3a\u526f\u4f5c\u7528\u3002\u5b83\u53ef\u80fd\u610f\u5473\u7740\u4ea7\u751f\u7528\u6237\u53ef\u89c1\u7684\u8f93\u51fa\u6216\u4fee\u6539\u89e3\u91ca\u5668\u4e2d\u7684\u4e00\u4e9b\u72b6\u6001\uff0c\u4ee5\u4fbf\u4ee5\u540e\u53ef\u4ee5\u68c0\u6d4b\u5230\u3002\u540e\u8005\u4f7f\u5b83\u4eec\u975e\u5e38\u9002\u5408\u5b9a\u4e49\u53d8\u91cf\u6216\u5176\u4ed6\u547d\u540d\u5b9e\u4f53\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"environments",children:"Environments"}),"\n",(0,t.jsx)(e.p,{children:"\u5c06\u53d8\u91cf\u4e0e\u503c\u5173\u8054\u7684\u7ed1\u5b9a\u9700\u8981\u5b58\u50a8\u5728\u67d0\u4e2a\u5730\u65b9\u3002\u81ea\u4eceLisp\u7684\u53d1\u660e\u8005\u53d1\u660e\u4e86\u62ec\u53f7\u4ee5\u6765\uff0c\u8fd9\u79cd\u6570\u636e\u7ed3\u6784\u5c31\u88ab\u79f0\u4e3a\u73af\u5883\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"class Environment {\n  private final Map<String, Object> values = new HashMap<>();\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"scope",children:"Scope"}),"\n",(0,t.jsx)(e.p,{children:"\u4f5c\u7528\u57df\u5b9a\u4e49\u4e86\u4e00\u4e2a\u533a\u57df\uff0c\u5176\u4e2d\u4e00\u4e2a\u540d\u79f0\u6620\u5c04\u5230\u67d0\u4e2a\u5b9e\u4f53\u3002\u591a\u4e2a\u4f5c\u7528\u57df\u4f7f\u5f97\u540c\u4e00\u4e2a\u540d\u79f0\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u4e0a\u4e0b\u6587\u4e2d\u6307\u4ee3\u4e0d\u540c\u7684\u4e8b\u7269\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8bcd\u6cd5\u4f5c\u7528\u57df\uff08\u6216\u8f83\u5c11\u542c\u5230\u7684\u9759\u6001\u4f5c\u7528\u57df\uff09\u662f\u4e00\u79cd\u7279\u5b9a\u7684\u4f5c\u7528\u57df\u98ce\u683c\uff0c\u7a0b\u5e8f\u6587\u672c\u672c\u8eab\u663e\u793a\u4e86\u4f5c\u7528\u57df\u7684\u5f00\u59cb\u548c\u7ed3\u675f\u4f4d\u7f6e\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u8fc7\u5bf9\u6c42\u503c\u73af\u5883\u589e\u52a0\u5d4c\u5957\u6765\u5b9e\u73b0\u4f5c\u7528\u57df\u7684\u6548\u679c\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"class Environment {\n  final Environment enclosing; // \u6c42\u503c\u73af\u5883\u5d4c\u5957\n  private final Map<String, Object> values = new HashMap<>();\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"control-flow",children:"Control Flow"}),"\n",(0,t.jsx)(e.p,{children:"\u76ee\u524d\uff0c\u6211\u4eec\u7684\u89e3\u91ca\u5668\u53ea\u4e0d\u8fc7\u662f\u4e00\u4e2a\u8ba1\u7b97\u5668\u3002Lox\u7a0b\u5e8f\u53ea\u80fd\u5728\u5b8c\u6210\u4e4b\u524d\u505a\u56fa\u5b9a\u6570\u91cf\u7684\u5de5\u4f5c\u3002\u8981\u4f7f\u5176\u8fd0\u884c\u65f6\u95f4\u52a0\u500d\uff0c\u5fc5\u987b\u4f7f\u6e90\u4ee3\u7801\u957f\u5ea6\u52a0\u500d\u3002\u6211\u4eec\u5373\u5c06\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u7684\u89e3\u91ca\u5668\u8fc8\u51fa\u4e86\u5411\u7f16\u7a0b\u8bed\u8a00\u4e3b\u8981\u8054\u8d5b\u8fc8\u8fdb\u7684\u91cd\u8981\u4e00\u6b65\uff1a\u56fe\u7075\u5b8c\u5907\u6027\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"if",children:"IF"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"  private Stmt ifStatement() {\n    consume(LEFT_PAREN, \"Expect '(' after 'if'.\");\n    Expr condition = expression();\n    consume(RIGHT_PAREN, \"Expect ')' after if condition.\"); \n\n    Stmt thenBranch = statement();\n    Stmt elseBranch = null;\n    if (match(ELSE)) {\n      elseBranch = statement();\n    }\n\n    return new Stmt.If(condition, thenBranch, elseBranch);\n  }\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u4f55\u5bf9IF\u6c42\u503c\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"  @Override\n  public Void visitIfStmt(Stmt.If stmt) {\n    if (isTruthy(evaluate(stmt.condition))) {\n      execute(stmt.thenBranch);\n    } else if (stmt.elseBranch != null) {\n      execute(stmt.elseBranch);\n    }\n    return null;\n  }\n"})}),"\n",(0,t.jsx)(e.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(e.p,{children:"\u4e00\u65e6\u6211\u4eec\u51c6\u5907\u597d\u88ab\u8c03\u7528\u8005\u548c\u53c2\u6570\uff0c\u5269\u4e0b\u7684\u5c31\u662f\u6267\u884c\u8c03\u7528\u3002\u6211\u4eec\u901a\u8fc7\u5c06\u88ab\u8c03\u7528\u8005\u8f6c\u6362\u4e3aLoxCallable\uff0c\u7136\u540e\u5728\u5176\u4e0a\u8c03\u7528\u4e00\u4e2a call() \u65b9\u6cd5\u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002\u4efb\u4f55\u53ef\u4ee5\u50cf\u51fd\u6570\u4e00\u6837\u88ab\u8c03\u7528\u7684Lox\u5bf9\u8c61\u7684Java\u8868\u793a\u90fd\u5c06\u5b9e\u73b0\u8fd9\u4e2a\u63a5\u53e3\u3002\u8fd9\u5305\u62ec\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u5f53\u7136\u4e5f\u5305\u62ec\u7c7b\u5bf9\u8c61\uff0c\u56e0\u4e3a\u7c7b\u88ab\u201c\u8c03\u7528\u201d\u6765\u6784\u9020\u65b0\u5b9e\u4f8b\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"interface LoxCallable {\n  Object call(Interpreter interpreter, List<Object> arguments);\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"function-objects",children:"Function Objects"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u57fa\u672c\u4e0a\u5c31\u662f Stmt.Function \u7c7b\u7684\u4f5c\u7528\u3002\u6211\u4eec\u80fd\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528\u5b83\uff1f\u51e0\u4e4e\u53ef\u4ee5\uff0c\u4f46\u8fd8\u4e0d\u591f\u3002\u6211\u4eec\u8fd8\u9700\u8981\u4e00\u4e2a\u5b9e\u73b0 LoxCallable \u63a5\u53e3\u7684\u7c7b\uff0c\u8fd9\u6837\u6211\u4eec\u624d\u80fd\u8c03\u7528\u5b83\u3002\u6211\u4eec\u4e0d\u5e0c\u671b\u89e3\u91ca\u5668\u7684\u8fd0\u884c\u65f6\u9636\u6bb5\u6e17\u5165\u524d\u7aef\u7684\u8bed\u6cd5\u7c7b\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u5e0c\u671b Stmt.Function \u672c\u8eab\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002\u76f8\u53cd\uff0c\u6211\u4eec\u5c06\u5176\u5305\u88c5\u5728\u4e00\u4e2a\u65b0\u7684\u7c7b\u4e2d\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"class LoxFunction implements LoxCallable {\n  private final Stmt.Function declaration;\n  LoxFunction(Stmt.Function declaration) {\n    this.declaration = declaration;\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"call\u7684\u5b9e\u73b0\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"  @Override\n  public Object call(Interpreter interpreter,\n                     List<Object> arguments) {\n    Environment environment = new Environment(interpreter.globals);\n    for (int i = 0; i < declaration.params.size(); i++) {\n      environment.define(declaration.params.get(i).lexeme,\n          arguments.get(i));\n    }\n\n    interpreter.executeBlock(declaration.body, environment);\n    return null;\n  }\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u5728\u6bcf\u6b21\u8c03\u7528\u65f6\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u73af\u5883\uff0c\u800c\u4e0d\u662f\u5728\u51fd\u6570\u58f0\u660e\u65f6\u3002\u6211\u4eec\u4e4b\u524d\u770b\u5230\u7684\u65b9\u6cd5\u5c31\u662f\u8fd9\u6837\u505a\u7684\u3002\u5728\u8c03\u7528\u5f00\u59cb\u65f6\uff0c\u5b83\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u73af\u5883\u3002\u7136\u540e\u5b83\u4ee5\u6b65\u8c03\u4e00\u81f4\u5730\u904d\u5386\u53c2\u6570\u548c\u53c2\u6570\u5217\u8868\u3002\u5bf9\u4e8e\u6bcf\u4e00\u5bf9\uff0c\u5b83\u90fd\u4f1a\u4f7f\u7528\u53c2\u6570\u7684\u540d\u79f0\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u53d8\u91cf\uff0c\u5e76\u5c06\u5176\u7ed1\u5b9a\u5230\u53c2\u6570\u7684\u503c\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"classes",children:"Classes"}),"\n",(0,t.jsx)(e.p,{children:"\u7c7b\u7684\u89e3\u6790\u65b9\u5f0f\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'  private Stmt classDeclaration() {\n    Token name = consume(IDENTIFIER, "Expect class name.");\n    consume(LEFT_BRACE, "Expect \'{\' before class body.");\n\n    List<Stmt.Function> methods = new ArrayList<>();\n    while (!check(RIGHT_BRACE) && !isAtEnd()) {\n      methods.add(function("method"));\n    }\n\n    consume(RIGHT_BRACE, "Expect \'}\' after class body.");\n\n    return new Stmt.Class(name, methods);\n  }\n'})}),"\n",(0,t.jsx)(e.h3,{id:"creating-instances",children:"Creating Instances"}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528callable\u6765\u5b9e\u73b0\u7c7b\u7684\u521d\u59cb\u5316\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'class LoxClass implements LoxCallable {\n  final String name;\n  final LoxClass superclass; // \u7c7b\u7684\u7ee7\u627f\n  private final Map<String, LoxFunction> methods; // \u7c7b\u65b9\u6cd5\n\n  @Override\n  public Object call(Interpreter interpreter,\n                     List<Object> arguments) {\n    LoxInstance instance = new LoxInstance(this);\n    // \u6784\u9020\u5668\u7ea6\u5b9a\u4e3a\u7279\u6b8a\u7684\u51fd\u6570 \u540d\u4e3ainit\n    LoxFunction initializer = findMethod("init");\n    if (initializer != null) {\n      initializer.bind(instance).call(interpreter, arguments);\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u7c7b\u7684\u5b9e\u4f8b\u5305\u542b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"class LoxInstance {\n\n  private LoxClass klass;\n\n  private final Map<String, Object> fields = new HashMap<>(); // \u7c7b\u5c5e\u6027\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>i});var t=s(7294);const a={},r=t.createContext(a);function i(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);