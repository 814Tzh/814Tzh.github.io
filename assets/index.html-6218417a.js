import{_ as s,p as n,q as a,a1 as e}from"./framework-204010b2.js";const t={},p=e(`<p>类型断言有两种形式</p><p>“尖括号” 语法</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> someValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;this is a string&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>someValue<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>as 语法</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> someValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&quot;this is a string&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>someValue <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//语法：变量 as 类型  或者 &lt;类型&gt;变量</span>
s <span class="token operator">=</span> e <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>e<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function l(i,c){return n(),a("div",null,o)}const u=s(t,[["render",l],["__file","index.html.vue"]]);export{u as default};