---
title: ChatGPT 頂級學術論文指令
---

# ChatGPT 頂級學術論文指令

一份用於「頂級學術論文」寫作的 AI 提示詞，適用於論文寫作與學術研究。將提示詞粘貼到下方代碼框，複製後發給 AI 即可使用。



## 提示詞

```text
一、學術角色預設
論文中無論是潤色，語法檢查還是降重，都要先進行角色預設，先給定一個身份。
有些學術 GPT 是自帶提示詞的，有些人使用的 GPT 並沒有提前進行預設，這種需
要我們手動進行預設。
例如，你需要問論文方面的問題，可以先用這個指令對 GPT 提問，提前預設好
GPT 角色了，會讓接下來的提問結果質量更高，語法更具準確性。
1.學術角色
As a leader in the academic field, I possess extensive academic experience
and professional knowledge across various domains. I am not only involved
in cutting-edge research but also actively share my expertise and insights.
I excel in adhering to academic writing standards, enhancing the quality
and impact of papers, meticulously refining every detail, and optimizing
language expression and logical structure. 我作為學術領域的引領者，在各個領域擁有豐富的學術經驗與專業知識，不僅參
與前沿研究，還積極分享經驗與見解擅長學術寫作規範，提升論文的品質與影響
力，精細潤色每個細節，優化語言表達與邏輯結構
當然，你也可以預設其他的角色。
2.論文評審專家
 請他扮演一個專業的論文評審專家，對論文草稿給出評審意見，然後根據
意見，去重新審視論文。
 在修改具體論文內容時，讓他扮演我所研究的領域的專家，這樣可以讓它
的表達更加準確。
You are now acting as an expert in the field of [Put professional fields
here…]. From a professional point of view, do you think there is any need
to modify the above content? Be careful not to modify the whole text, you
need to point out the places that need to be modified one by one, and give
revision opinions and recommended revision content.
你現在扮演一個[這裡放你所研究的領域] 領域的專家，從專業的角度，您認為
上面這些內容是否有需要修改的地方？ 注意，不要全文修改，您需要一一指出
需要修改的地方，並且給出修改意見以及推薦的修改內容
二、論文撰寫指令
1.寫標題
I will provide you with the abstract and key words of a scientific paper
in any language and you will detect the language and reply in the same
language. Your task is to provide me with the title of the scientific paper
based on the abstract and key words in the same language. The title of
the scientific paper should be concise, clear and informative. You should
avoid using wasted words such as “a study of,” “investigation of,”
“development of,” or “observations on.” Make sure the title can grip
the audience immediately. My abstract is "XXX", my key words are "XXX" 我將向你提供一篇任何語言的科學論文的摘要和關鍵詞，你將檢測該語言並以相
同的語言進行回覆。你的任務是根據摘要和關鍵詞用相同的語言向我提供科學論
文的標題。科學論文的標題應該是簡潔、明確和有信息量的。你應該避免使用諸
如研究、調查、發展或觀察等詞語。確保標題能夠立即抓住聽眾的心。
2.寫英文標題
I want you to act as an academic journal editor. I am going to provide
you an abstract of manuscript and you provide me with 5 good titles in
English for a research paper and give explanation for why this title is
good. Provide your output as a markdown table with two columns and with
head in Chinese. First column gives titles in English and second column
provides explanation in Chinese. The following text is the abstract: 希
望你擔任一名學術期刊編輯。我將為你提供一個手稿的摘要，你需要為一篇研究
論文提供 5 個好的英文標題，並解釋為什麼這個標題好。請以 Markdown 表格的
形式提供你的輸出，表格有兩列，標題用中文。第一列給出英文標題，第二列用
中文提供解釋。以下是摘要：
3.寫摘要
這個指令可以為你的研究論文撰寫一個摘要，簡潔地總結研究目標、方法、主要
發現和意義，確保摘要清晰、連貫，同時遵循學術領域的具體指南和慣例。
Act as an academic research expert. Draft an abstract for a research paper
titled [title]. The abstract should succinctly summarize the main
objectives, methodologies, key findings, and implications of the research. 作為學術研究專家，為研究論文撰寫一個簡潔、精確的摘要。
4.寫英文摘要指令
Please read through the uploaded manuscript and write an abstract in
English for it. The abstract should initiate with a comprehensive summary
of the broader context or background of the study, followed by a statement
that describe the gaps, limitations or issues. Then, describe the research
methods used in the manuscript. After that, write 3-5 sentences showing
the key findings. In the end, include a statement which underscores the
unique value or significant contribution of the manuscript. After
generating the abstract, give explanation in Chinese checking if you have
followed the instruction in a markdown table. 請閱讀上傳的手稿，併為其撰寫一份英文摘要。摘要應首先提供研究背景或更廣
泛背景的全面概述，接著陳述描述研究的空白、侷限性或問題。然後，描述手稿
中使用的研究方法。此後，寫出 3-5 句話展示關鍵發現。最後，包括一份強調手
稿獨特價值或重大貢獻的聲明。在生成摘要後，以中文提供解釋，檢查你是否遵
循了指令，並以 Markdown 表格形式展示。
5.縮寫名稱
可以向 AI 尋求為段落起標題，為方法起縮寫名稱等。
What abbreviations can "XXX" have? Give several options, with reasons,
for use in an academic paper. "XXX"可以有哪些縮寫？請給出幾種選擇，並
給出理由，以便用於論文中。
6.論文續寫
這個方法一般適合實在想不出什麼內容，又希望增加字數的情況。
Based on the knowledge you have mastered about [xxx], polish and continue
writing the above content to make the content richer and more complete. 根據你所掌握的關於[xxx]的知識，潤色並續寫上面的內容，使得內容更加豐富
完整。
7.論文致謝
對在研究過程中提供幫助的個人或機構表示感謝。
我想請你幫我寫一份關於我的論文的致謝。我的論文的題目是(題目)，我的導師
是(導師)，我的合作者是(合作者)。我想感謝以下的人或機構： (感謝對象 1):
感謝他們對我的(幫助或貢獻) (感謝對象 2):感謝他們對我的(幫助或貢獻) (感
謝對象 n):感謝他們對我的(幫助或貢獻) 你能根據這些信息，寫一份大約(字數)
字的致謝嗎?請使用禮貌和誠懇的語氣並注意格式和標點。
8.論文大綱
為研究論文起草一個結構良好的大綱，包括引言、文獻綜述、方法論、研究結果
和結論，確保研究的合理性、創新性和對現有知識的貢獻。
Act as an academic research expert. Draft a comprehensive research paper
outline on [topic]. The outline should be well-structured, starting with
a compelling introduction that states the problem or question, the
relevance of the topic, and the objectives of the research. 作為學術研究專家，為研究論文起草一個結構良好的大綱，明確研究的主要部
分。三、學術潤色指令
學術潤色涉及對論文草稿的語言、語法、邏輯和結構進行改進，以提高其清晰度、
連貫性和專業性。
1.英文潤色
The following is a paragraph from a n academic paper. Refinish writing
to conform to academic style，improve spelling，grammar，clarity,
conciseness and overall readability. If necessary, rewrite the entire
sentence. In addition,list all modifications in the Markdown table and
explain the reasons for doing so.Paragraph ：（+the paragraph that requires
polishing）
以下是一篇學術論文中的一段文字。請重新潤色寫作，以符合學術風格，提高拼
寫、語法、清晰度、簡潔性和整體可讀性。如有必要，重寫整個句子。此外，請
在 Markdown 表格中列出所有修改，並解釋修改的原因。段落：（+潤色內容）。
2.英文潤色
這段指令將在 Markdown 表格中列出所有潤色修改部分，並解釋修改的原因，可
以看到潤色的效果很不錯的，也可以優化提問。潤色過程中，可以讓 GPT 提供多
個版本的修改建議，我們的選擇性也更多。
Below is a paragraph from an academic paper. Polish the writing to meet
the academic style,improve the spelling, grammar, clarity, concision and
overall readability. When necessary, rewrite the whole sentence.
Furthermore, list all modification and explain the reasons to do so in
markdown table. Paragraph ：XXX
以下是一篇學術論文中的段落。請潤色寫作以符合學術風格，提高拼寫、語法、
清晰度、簡潔性和整體可讀性。如有必要，重寫整個句子。此外，請在 Markdown
表格中列出所有修改，並解釋修改的原因。段落：XXX
3.中文潤色
與通常的指令不同的是，這個 prompt 特別指出，助手只需提供修改後的文本版
本，而無需包含任何解釋或額外的說明。
As a Chinese academic paper writing improvement assistant, your task is
to enhance the spelling, grammar, clarity, conciseness, and overall
readability of the provided text. Break down long sentences, reduce
repetition, and offer suggestions for improvement. Please provide only
the corrected version of the text without including explanations. Edit
the following text: (content to be polished)
作為一名中文學術論文寫作改進助理，你的任務是改進所提供文本的拼寫、語法、
清晰、簡潔和整體可讀性，同時分解長句，減少重複，並提供改進建議。請只提
供文本的更正版本，避免包括解釋。請編輯以下文本：（潤色內容）
4.SCI 論文潤色
I am preparing my SCI paper for submission and require assistance in
polishing each paragraph. Could you please refine my writing for academic
rigor? I need you to correct any grammatical errors, improve sentence
structure for academic suitability, and make the text more formal where
necessary. For each paragraph we need to improve, you need to put all
modified sentences in a Markdown table, each column contains the following:
Full original sentence; Highlight the revised part of the sentence;
Explain why made these changes. Finally, Rewrite the full, corrected
paragraph. If you understand, please reply: yes, let's get started. 我正在準備我的 SCI 論文以便提交，需要幫助潤色每個段落。你能幫我提升學術
嚴謹性嗎？我需要你糾正任何語法錯誤，改進句子結構以適應學術要求，並在必
要時使文本更加正式。對於每個需要改進的段落，你需要將所有修改後的句子放
在一個 Markdown 表格中，每一列分別包含以下內容：完整的原始句子；突出顯
示句子的修訂部分；解釋為什麼做出這些更改。最後，重寫整個更正後的段落。
如果你理解了，請回復：是的，讓我們開始吧。
5.期刊/會議風格
根據期刊會議(注意 期刊或者會議要足夠著名)的風格，來潤色內容。
If I wish to publish a paper at a XXX conference, please polish the above
content in the style of a XXX article. 提示：如果我希望將論文發表在 XXX 會議/期刊上，請按照 XXX 文章的風格，對
上面的內容進行潤色。
6.潤色英文段落結構和句子邏輯
I am a researcher studying +（你的研究方向） and now trying to revise
my manuscript which willbe subrnitted to the +（你的投稿期刊）. want
you to analyze the logic and coherence amongsentences within each
paragraph in the following text, ldentify any areas where the flow
orconnections between sentences could be improved,and provide specific
suagestions toenhance the overall quality and readabllity to the content.
Please only provide the text aftelimproving and then give a list of the
improvements in Chinese. lf you understand the abovetask, please reply
with yes, and then I will provide you with the text. 7.直接潤色段落
Polish the paragraph above to make it more logical, and academic. 潤色上面的內容，使其更加更合邏輯，更符合學術風格。
8.潤色多版參考
Please provide multiple versions for reference
這裡給出了其它兩版的參考，方便我們參考對比
9.錯誤糾正
如果 ChatGPT 理解錯了你的問題，可以給它一個錯誤的反饋，讓它重新回答
Prompt: Note that it is not ....., but ..... Re-answer the previous
question based on what I have added. 注意，不是...而是... 請根據我的補
充，重新回答上個問題
10、重新回答
如果認為回答的不夠好，或者方向不對。可以要求重新回答，並且指明側重方向。
比如你只希望去除當前段落的冗餘，並不想改動原意思。
Still the above question, I think your answer is not good enough. Please
answer again, this time focusing on removing redundancy from this passage. 還是上面的問題，我認為你回答的不夠好。請重新回答一次，這次你應該側重於
去除這段話中的冗餘。
11.語法檢查/查找語法錯誤
Can you help me ensure that the grammar and the spelling is correct? Do
not try to polish the text, if no mistake is found, tell me that this
paragraph is good. If you find grammar or spelling mistakes, please list
mistakes you find in a two-column markdown table, put the original text
the first column, put the corrected text in the second column and highlight
the key words you fixed. Example: Paragraph: How is you? Do you knows what
is it? | Original sentence | Corrected sentence | | :--- | :--- | |
How is you? | How are you? | | Do you knows what is it? | Do
you know what it is? | Below is a paragraph from an academic paper.
You need to report all grammar and spelling mistakes as the example before.
Paragraph: XXX
你能幫助我確保語法和拼寫正確無誤嗎？不要嘗試潤色文本，如果沒有發現錯誤，
請告訴我這段話很好。如果你發現了語法或拼寫錯誤，請按照之前的例子，在雙
列的 Markdown 表格中列出你發現的錯誤，第一列放原始文本，第二列放更正後
的文本，並突出顯示你修正的關鍵詞。示例： | 原始句子 | 更正後的句子 |
| :--- | :--- | | How is you? | How are you? | | Do
you knows what is it? | Do you know what it is? |
以下是一篇學術論文中的段落。你需要按照上述例子報告所有語法和拼寫錯誤。
段落：XXX
12.語法校正
I am a researcher studying +（你的研究方向） and now trying to revise
my manuscript which willbe submitted to the +（你的投稿期刊）. Please
help me to ensure the grammar and spellingare correct. Do not try to
improve the text, if no mistake found, tell me this paragraph is good.If
you find grammar or spelling mistakes, please list the mistakes you find
in a two-columnmark down table, put the original text in the first column,
put the corrected text in the second column, and do highlight the key words
you fixed in bold. 13.語法句法
This sentence is grammatically incorrect. Please revise.這句話在語法上
是不正確的。請修改。
The subject and verb do not agree in this sentence. Please correct.主
語和動詞在這句話中不一致。請改正。
This phrase seems out of place. Please rephrase to improve clarity.這
句話似乎不合適。請重新措辭以表達更清晰。
I have used a passive voice in this sentence. Consider using an active
voice instead. 我在這句話中使用了被動語態。考慮改用主動語態。
14.潤色定位
如果文本過長不利於觀察，讓它回答具體修改了哪些地方。
Note that in addition to giving the modified content, please also indicate
which paragraphs and sentences have been modified in the revised version.
注意，除了給出潤色修改之後的內容，還請指明修訂的版本中具體修改了哪些段
落的哪幾句話。
15.優化語法
This sentence is grammatically incorrect. Please revise. 請修改這句話
在語法上不正確的地方
The subject and verb do not agree in this sentence. Please correct. 請
改正主語和動詞在這句話中不一致的地方
This phrase seems out of place. Please rephrase to improve clarity. 這
句話似乎不合適。請重新措辭以表達更清晰。
I have used a passive voice in this sentence. Consider using an active
voice instead. 我在這句話中使用了被動語態。考慮改用主動語態。
16.修改建議
You are now acting as an expert in the field of lung cancer From a
professional point of view, do you think there is any need to modify the
above content? Be careful not to modify the whole text, you need to point
out the places that need to be modified one by one, and give revision
opinions and recommended revision content. 你現在扮演一個[這裡放你所研究的領域] 領域的專家，從專業的角度，您認為
上面這些內容是否有需要修改的地方？ 注意，不要全文修改，您需要一一指出
需要修改的地方，並且給出修改意見以及推薦的修改內容。
17.修改意見
I started to write an academic paper, the title is XXXXX, now I have
finished the introduction part, but I am not sure whether it is suitable,
can you help me to read it, and put forward detailed and specific revision
suggestions?
我開始寫論文了，題目是 XXXXX，現在我完成了引言部分，但是不確定是否合適，
你能幫我看一下，並提出詳細具體的修改意見嗎？
18.封裝基本事實/原理/背景
潤色的同時，修改基本邏輯錯誤。如果對內容的潤色需要一些背景知識，可以在
對話時主動告訴 ChatGPT，比如 XXX 原理。
Now, in order to help me better polish my thesis, I need you to remember
the XXX principle: "......." 現在，為了接下來能夠幫我更好的潤色論文，我需要你記住 XXX 原理：“.......”
這樣就相當於為一段內容，封裝了一個函數名稱，之後你再次提到 XXX 原理的
時候，ChatGPT 就能快速知道你說的是哪些基本事實了。
Polish and rewrite the above content to make it more in line with the style
of academic papers, and at the same time, it can be more professional.
If there are parts that do not conform to facts or logic, please refer
to the part of xxxxx for the above content modification. 潤色並重寫上面的內容，使其更加符合論文的風格，於此同時，又能更加專業化，
如果有不符合事實或者邏輯的部分，請你參考 XXX 原理部分對上面的內容修改。
19.邏輯論證輔助
AI 在邏輯推理方面有顯著的提升，可以用於輔助構建更有說服力的論證。
Please help me analyze and optimize the logical structure of this argument
to make it more convincing. 請幫我分析和優化這段論證的邏輯結構，以使其更具說服力。
20.個性化潤色指令
更精確的術語(More precise)：選擇更精確的詞彙，例如使用“generate”代替
“produce”
精煉表達(More concise)：去除冗餘的表達以提高句子的清晰度和直接性。
客觀的語言(More objective)：剔除含糊和主觀性表述，以客觀方式呈現信息。
細化描述(More specific)：提供更具體的細節，以支持論點或想法。
更連貫的表達(More coherent)：確保句子的組織性良好，邏輯流暢。
保持風格一致(More consistent)：確保用詞和語調與整篇論文保持一致。
符合學術風格(More academic)：運用正確的學術用語如“moreover”和
“consequently”。
規範語法(More formal grammar)：使用正確的語法或句法，避免語句不完整或
偏離主題。
深化細節描繪(More nuanced)：使用精準的詞彙和短語描述複雜或微妙的概念，
使句子更加細化。
Make nuanced adjustments:對文本進行微調
lmplement marginal modifications:進行邊際性修改
Clarify through rewording:改述以增強清晰性
Streamline sentence composition:簡化句子結構
Verify grammatical correctness and orthography:校驗語法的拼寫的正確性
lmprove textual fluidity and consistency:提升文本的流暢度和連貫性
Refine diction：措辭精練
Adjust for stylistic alignment：調整風格
Execute substantial revisions：執行重要的編輯
Overhaul content framework:改變內容架構
四、中英翻譯指令
1.論文翻譯
I would like you to serve as an English translator, proofreader, and editor
to translate my upcoming Chinese content into elegant, refined, and
academic English. Please replace simple vocabulary and sentences with
more sophisticated and graceful expressions while ensuring that the
meaning remains intact. Overall, the language style should be similar to
the American Economic Review academic journal. If you understand, please
provide an example first.
我希望您能擔任我的英文翻譯、校對和編輯工作，將我即將推出的中文內容翻譯
成優雅、精煉且具有學術性的英文。請在保持原意不變的前提下，將簡單的詞彙
和句子替換為更復雜、更優美的表達方式。總體而言，語言風格應類似於《美國
經濟評論》學術期刊。如果您理解了，請先提供一個示例。
2.中譯英
Please translate following sentence to English:XXX
請將以下句子翻譯成中文：XXX
3.中譯英
Translate the above Chinese into the corresponding English, requiring the
writing style of an academic paper
將上面的中文，翻譯成對應的英語，要求具有論文的寫作風格
4.中譯英
I am a researcher studying +（Your research direction） and now trying
to revise my manuscript which willbe submitted to the+（Your submission
journal）. I want you to act as a scentiic English-Chnesetranslator,I will
provide you with some paragraphs in one language and your task is
toaccurately and academically translate the paragraphs only into the
other language. I want you to give the output in a markdown table where
the first colurrn is the onginal language andthe second is the first
version of translation and third column is the second version of
thetranslation, and give each row only one sentence. lf you understand
the above task, pleasereply with yes, and then l will provide you with
the paragraphs. 我是一名研究者，專注於+（你的研究方向），目前正在修訂我的手稿，準備提
交至+（你的投稿期刊）。我希望你擔任一名科學性的英文-中文翻譯，我會提供
給你一些段落的其中一種語言，你的任務是準確且學術性地將這些段落翻譯成另
一種語言。我希望你以 Markdown 表格的形式給出翻譯結果，其中第一列是原文，
第二列是第一版的翻譯，第三列是第二版的翻譯，並且每行只包含一句翻譯。如
果你理解了上述任務，請回復“是的”，然後我會提供給你這些段落。
5.中英互譯
I want you to act as a scientific English-Chinese translator, I will
provide you with some paragraphs in one language and your task is to
accurately and academically translate the paragraphs only into the other
language. Do not repeat the original provided paragraphs after
translation. You should use artificial intelligence tools, such as
natural language processing, and rhetorical knowledge and experience
about effective writing techniques to reply. I'll give you my paragraphs
as follows, tell me what language it is written in, and then translate:XXX
我希望你擔任一名科學性的英文-中文翻譯員，我會提供一些段落給你，你的任
務是準確且學術性地將這些段落翻譯成另一種語言。翻譯後請不要重複原文段落。
你應該使用人工智能工具，比如自然語言處理，以及關於有效寫作技巧的修辭知
識和經驗來進行回覆。我將如下提供我的段落，告訴我它是用什麼語言寫的，然
後進行翻譯：XXX
五、論文查重降重指令
1.內容降重
用的時候一定不用忘記加入自己的研究領域，如我想讓你充當一位計算機視覺領
域的專家。
I would like you to act as an expert in the [field of your choice], and
help students with plagiarism check for their papers. If there are 13
consecutive identical words in the text, they will be considered as
duplication. You need to use methods such as adjusting the order of
subjects, verbs, and objects, replacing synonyms, adding or deleting
words to achieve the goal of plagiarism check. Please modify the following
paragraph:
我想讓你充當一位[你希望的某個]領域的專家，幫助學生進行論文的去重修改。
如果文章中連續 13 個字一樣，就算重複。你需要通過調整主謂賓語序替換同義
詞、增減字數等方法，來達到論文去重的目的。請你修改下面這段文字：
2.改寫降重
Please rephrase this passage by adjusting the word order, modifying the
length, and substituting synonyms to avoid any sequence of eight
consecutive words that match the original text, ensuring that the revised
content is more logical and adheres to academic standards. 請將這段話改寫，通過調整語序增減字數，替換同義詞等方式，避免與原文出現
連續八個字相同的句子，使這段話更加有邏輯，符合論文的規範。
3.同義詞替換降重
Please assist me in reorganizing the following sentence by adjusting its
logical structure, employing active and passive voice interchange,
synonym replacement, and paraphrasing with near-synonyms to rewrite the
sentence. Additionally, break down complex sentences and reduce
repetition. Provide only the corrected version of the text. 請幫我把下面句子重新組織，通過調整句子邏輯，利用主動被動替換，同義詞替
換，近義詞替換來改寫句子，同時分解長句，減少重複，請只提供文本的更正版
本。
4.避免連續相同
Please reduce the repetition in the following content by adjusting the
order of words, modifying the length, and substituting synonyms to avoid
any sequence of eight consecutive words that match the original text,
ensuring that the passage is more logical and adheres to the standards
of academic writing.
請將下面的內容降低重複率，通過調整語序增減字數，替換同義詞等方式，避免
與原文出現連續 8 個字相同的句子，使這段話更加具有邏輯，符合論文的規範。
5.縮寫擴寫降重
Please rewrite this passage by adjusting the order of words, increasing
or decreasing the number of words, and substituting synonyms to avoid any
sequence of three consecutive words that match the original text. Ensure
that the revised passage is more logical and adheres to the standards of
academic writing. Then, expand upon the content. Finally, condense it to
fit the style of an academic paper. 請將這段話改寫，通過調整語序增減字數，替換同義詞等方式，避免與原文出現
連續三個字相同的句子，使這段話更加有邏輯，符合論文的規範。然後再進行擴
寫。最後再縮寫，符合論文風格。
6.關鍵詞彙替換降重
Kindly replace key terms in this section with appropriate synonyms to
reduce similarity and enhance originality without compromising the
meaning or academic integrity. 請替換本節中的關鍵詞彙為合適的同義詞，以降低相似度並增強原創性，同時不
影響意義或學術完整性。
7.句式變換降重
Rewrite the sentences in this paragraph by changing the grammatical
constructions and incorporating alternative expressions to avoid any
sequence of five consecutive words that are identical to the original. 請通過改變句法結構和加入替代表達方式，重寫本段中的句子，避免出現連續五
個字與原文完全相同的情況。
8.邏輯重組
Reorganize the logic of this argument by restructuring sentences and
paragraphs, ensuring that the flow of ideas is coherent and distinct from
the original text. 請通過重構句子和段落的邏輯，確保思想的流暢性並且與原文有所區別。
9.綜合改寫
Revise this section by integrating new ideas and perspectives, rephrasing
to ensure that the content is unique and adheres to academic standards
of citation and originality. 請通過整合新的想法和視角來修改本節，重新表述以確保內容具有獨特性，並符
合學術引用和原創性的標準。
10.數據呈現方式變更
Please help me present the following content in the form of a chart. 請幫我將以下內容轉為圖表的形式進行展示。
11.概念解釋降重
Explain the concepts in your own words after understanding their meaning,
to reduce the reliance on the original text and increase the level of
original thought. 請在理解其含義後用自己的話解釋概念，以減少對原文的依賴並提高原創思考的
水平。 六、參考文獻指令
1.檢查參考文獻格式
I'd like you to serve as a reference editor for a research manuscript.
I will supply you with five reference templates that you should use as
guidelines. Following that, I will provide additional references for
which you'll need to examine formatting aspects such as punctuation
placement and spacing. It is essential that the provided references align
cohesively with the five initial templates. Provide me with any necessary
corrections or suggestions for improve the text. Give a markdown table
with three columns where the first is the original text, second is the
fixed text, explanation in the third column, and then provide all fixed
references. Below are the five example templates and references needed
to be fixed:
我希望您能擔任一篇研究手稿的參考文獻編輯。我將為您提供五個參考文獻模板，
您應該將其作為指導方針使用。之後，我將提供額外的參考文獻，您需要檢查諸
如標點符號位置和間距等格式方面的問題。所提供的參考文獻必須與最初的五個
模板保持一致性。請向我提供任何必要的更正建議或改進文本的建議。請提供一
個 Markdown 表格，表格有三列，第一列是原文，第二列是更正後的文本，第三
列是解釋，然後提供所有已更正的參考文獻。以下是五個示例模板和需要更正的
參考文獻：
2.按照 APA 格式校正參考文獻格式
Please first correct the following reference format according to APA style,
adjusting it to strictly comply with APA citation format. Finally, I need
the references to be displayed in a Markdown format code block. It is
important to note that the journal names should be in full and italicized
(additional requirements can be added here). Here are my references:
首先請按照 APA 格式對以下參考文獻格式進行校正，調整為嚴格符合 APA 的文
獻格式，最後我需要將參考文獻以 Markdown 格式的代碼塊形式展示。需要注意
的是期刊名稱要全稱，且斜體(這裡可以添加其他要求)，下面是我的參考文獻： 七、投稿審稿指令
1.撰寫 Cover letter
寫 Cover letter，需要提供文章題目和摘要
I want you to act as an academic journal editor. I will provide you with
the title and abstract of my manuscript. You need to write a format cover
letter for submitting the manuscript to the Nature journal. You should
state that the manuscript did not consider for publication in any other
journal. Briefly introduce the merit of the manuscript and provide a short
summary to point out the importance of the results for a scientific
audience. The title and abstract are as follows:
我希望您能擔任一名學術期刊編輯。我將為您提供我的手稿的標題和摘要。您需
要為將手稿提交給《自然》雜誌撰寫一封格式正確的封面信。您應該聲明該手稿
尚未在任何其他期刊上考慮發表。簡要介紹手稿的優點，並提供一個簡短的總結，
以向科學界突出研究結果的重要性。標題和摘要如下：
2.解釋審稿人反饋
這個指令可以幫你分析和解釋審稿人對提交的研究論文的反饋，識別關鍵問題和
建議。然後創建一個詳細的回應計劃，說明如何在修訂稿中解決或反駁每個點。
Act as an academic research expert. Carefully analyze and interpret the
[feedback] provided by the reviewer on the submitted research paper.
Identify key concerns, constructive suggestions, and areas of improvement
highlighted by the reviewer. 作為學術研究專家，分析審稿人的反饋並創建詳細的回應計劃。 八、AI 讀文獻指令
1.歸納文獻核心要點
如果你想快速瞭解單篇文獻的核心要點，用這個指令準沒錯！
1.Condense the main points of this article for me. 2.What is the central
theme of this article? 3.In which aspects does the author present
innovative insights? 4.What is the primary research methodology employed
in this article? 5.Which points are substantiated by the data in this
article? 6.What significant arguments does the author utilize to bolster
their points? 7. What contributions does this article make to the field?
8.Can you assist in identifying the thesis statement in this article?
9.What are the primary conclusions drawn in this article? 1. 請提煉一
下這篇文章的核心觀點。2. 這篇文章的主題是什麼？ 3. 作者在哪些方面提供
了新穎的見解？ 4. 這篇文章主要採用了什麼研究方法？ 5. 文獻中的數據支
持了哪些觀點？ 6. 作者使用了哪些重要論據來支持觀點？ 7. 這篇文章對該
領域有何貢獻？ 8. 能幫我找出文獻的論文陳述嗎？ 9. 這篇文章的主要結論
是什麼？
2.總結論文內容
最適合科研小白的讀文獻指令！
Act as an academic research expert. Read and digest the content of the
research paper titled [xx]. Produce a concise and clear summary that
encapsulates the main findings, methodology, results, and implications
of the study. Ensure that the summary is written in a manner that is
accessible to a general audience while retaining the core insights and
nuances of the original paper. 作為[xx]領域的研究專家，閱讀並總結標題
為[xx]的研究論文的核心內容。請提供一個簡潔明瞭的摘要，概括研究的主要發
現、方法、結果及其意義。確保摘要以易於非專業讀者理解的方式撰寫，同時保
留原論文的核心見解和細微差別。
3.深入閱讀某篇論文
這個指令增加了閱讀文獻後總結字數和格式的要求，質量非常高！
您現在作為「」領域的世界頂級學術專家，想詳細閱讀並深入這篇論文（見
XXX.PDF），首先，請用 1000-1500 字左右的篇幅，對論文進行深入解讀。在講
述過程中,請多引用論文中的細節內容、關鍵數據和實驗結果，幫助我清楚地理
解論文的創新性貢獻。注意，論文中可能有一些技術概念相對新穎，我可能不太
瞭解，也請給出通俗的解釋。然後，請從以下幾個方面對論文進行詳細解讀：1. 論文的研究目標是什麼？ 想要解決什麼實際問題？這個問題對於產業發展有什
麼重要意義?
2.論文提出了哪些新的思路、方法或模型？跟之前的方法相比有什麼特點和優
勢？請儘可能參考論文中的細節進行分析。 3.論文通過什麼實驗來驗證所提出
方法的有效性？實驗是如何設計的？實驗數據和結果如何？請引用關鍵數據加
以說明。
4.結合「」領域的當前學術理解，未來在該研究方向上還有哪些值得進一步探索
的問題和挑戰？這可能催生出什麼新的技術和投資機會? 5.退一步，從批判的視
角看，這篇論文還存在哪些不足及缺失？又有哪些需要進一步驗證和存疑的？
6.我希望從這篇論文中找一些拿來即用的創新想法，我應該從這篇論文中重點學
什麼？有哪些啟發？你認為我還需要補充瞭解哪些背景知識? 在回答格式上,請
注意以下幾點: 用三級標題對應以上六個問題，清晰劃分不同部分
1.使用 Markdown 格式，適當加入列表、加粗等排版元素 2.引用原文時請使用
blockquote 的引用格式
3.關鍵術語首次出現時請加粗 4.使用中文書寫，學術名詞可以用英文補充
5.適當插入圖表，幫助理解論文內容
4.提取論文中的術語表
對於科研小白來說，超級實用的功能，直接幫你生成文獻中的術語表，真的太
香了！
Assuming I am a graduate student majoring in artificial intelligence,
please act as my thesis advisor and create a glossary of terms suitable
for my study based on this paper. This glossary should include three
columns: Term, Definition, and Section Index in the Thesis. The term
refers to the core terminology introduced by the author, or professional
entries that may be beyond my current level of understanding. The
definition should be in line with the original intent of the paper, and
should be explained as fully as possible in plain language. The section
index in the thesis refers to the title of the section where the term
appears in the paper, to facilitate my study in the original text. Please
extract terms that meet the requirements from the entire article and
format the output as a Markdown table. 假設我是人工智能專業的研究生，
請你扮演我的論文導師，根據這篇論文，生成一個適合我學習的術語表，這個術
語表應該包括三列：術語、定義、和論文中的標題索引。 術語是指作者提出的
核心術語，或者相對我的知識水平可能不夠理解的一些專業條目。 定義應該符
合論文原意，同時儘可能用平白的語言充分解釋。 論文中的標題索引是指這個
術語在論文中出現的段落位置所在的標題，以方便我到原文中學習。 請從整篇
文章中提取符合要求的術語。並將輸出格式化為 Markdown 表格。
5.生成文獻摘要
非常標準的讀論文的指令模板，科研 er 們，你可以直接用這個模板定製自己的
專屬指令！
角色與目的：我是一個“學術摘要專家”。我的主要功能是為用戶提供提交的學
術論文的詳細摘要和分析。 回答風格：我的回答具有學術性、詳細、準確，並
專注於論文的核心要點。它們被組織成符合學術標準的結構。 摘要模板：我遵
循一個特定的模板來總結論文。這包括： 1、基本信息：關於論文的詳細信息，
如標題、作者、期刊、出版日期等。 2、概述 1）論文研究什麼現象 2）該論文
的研究目的 3）作者的主要觀點 3、關鍵概念 1）研究的關鍵概念有什麼，列出
這些概念的中文和英文名稱 2）這些關鍵概念的定義 3）這些關鍵概念的關係 4、
理論基礎 1）關於該論文要研究的現象，論文提到了什麼相關理論 2）這些理論
間有什麼衝實 3）作者對這些理論的觀點 4）根據這篇研究，作者更支持哪個理
論 5、實驗方法 1）研究包含幾個實驗，實驗間的關係 2）各實驗的自變量、因
變量、控制變量是什麼 3）在各實驗中，自變量、因變量的操作性定義 6、結論
1）研究中各個實驗的主要結果 2）研究的主要結論 7、優勢：論文在其領域中
的強項或貢獻 8、弱點： 1）識別論文的任何可改進的地方 2）請根據你所瞭解
的最新研究，為我提供一些獨特的見解以便我在文章中進行討論 整體評估：對
論文的重要性、原創性和影響進行評估。 任務目標：我的任務是根據上述方面
系統地分析所提供的論文，確保在每個部分都採用全面和學術的方法。
6.文獻比較閱讀
用來對比兩篇文獻之間的差異，不過這個指令我用的不多，有需要的可以自己
存下來！
For the research question (such as "Under what circumstances does wishful
thinking more likely occur?"), what are the perspectives of these two
studies? Compare and analyze these two studies in the following aspects:
Research Purpose Theoretical Framework Experimental Design Main Findings
Applications and Significance Limitations of the Study
對於[研究問題]（如“願望思維在什麼情況下更容易出現”）這個問題，這兩篇
研究的觀點是什麼 將這兩篇研究對以下方面進行對比分析 1. 研究目的 2. 理
論框架 3. 實驗設計 4. 主要發現 5. 應用和意義 6. 研究侷限
九、其他場景的學術指令
1.論文期刊匹配
I want you to act as a scientific manuscript matcher. I will provide you
with the title, abstract and key words of my scientific manuscript,
respectively. Your task is analyzing my title, abstract and key words
synthetically to find the most related, reputable journals for potential
publication of my research based on an analysis of tens of millions of
citation connections in database, such as Web of Science, Pubmed, Scopus,
ScienceDirect and so on. You only need to provide me with the 15 most
suitable journals. Your reply should include the name of journal, the
cooresponding match score (The full score is ten). I want you to reply
in text-based excel sheet and sort by matching scores in reverse order.My
title is "XXX" My abstract is "XXX" My key words are "XXX" 我希望你能充當科學手稿的匹配者。我將分別向您提供我的科學手稿的標題、摘
要和關鍵詞。你的任務是綜合分析我的標題、摘要和關鍵詞，根據對數據庫中數
以千萬計的引文連接的分析，如 Web of Science、Pubmed、Scopus、ScienceDirect
等，為我的研究找到最相關、最有信譽的期刊。你只需向我提供 15 種最合適的
期刊。你的回覆應該包括期刊名稱，對應的匹配分數（滿分是 10 分）。我希望
你在基於文本的 excel 表格中進行回覆，並按匹配分數倒序排序。
2.找圖片
我需要你找一張網絡圖片。使用
Unsplash API(https://source.unsplash.com/960x640/?<英語關鍵詞>)獲取
圖片 URL，然後請使用 Markdown 格式封裝，並且不要有反斜線，不要用代碼塊。
現在，請按以下描述給我發送圖片：XXX
3.解釋代碼
請解釋以下代碼：import torch import torch.nn as nn # 定義輸入層、隱藏
層和輸出層的神經元數量 input_layer_size = 4 hidden_layer_size = 5
output_layer_size = 3 # 定義前饋神經網絡類 class
FeedForwardNN(nn.Module): def init(self): super(FeedForwardNN,
self).init() self.fc1 = nn.Linear(input_layer_size, hidden_layer_size)
self.fc2 = nn.Linear(hidden_layer_size, output_layer_size) self.sigmoid
= nn.Sigmoid() def forward(self, x): x = self.fc1(x) x = self.sigmoid(x)
x = self.fc2(x) x = self.sigmoid(x) return x # 創建神經網絡實例 model =
FeedForwardNN() # 測試前饋函數 X = torch.randn(1, input_layer_size) y =
model(X) print(y)
4.提供獨特見解
Please provide me with some unique insights that I can discuss in my paper,
based on the latest research that you are aware of. 請根據你所瞭解的最新研究，為我提供一些獨特的見解以便我在論文中進行討論。
5.深度分析與評估
Please help me to conduct an in-depth analysis of these research methods
and data, and provide me with an assessment of their advantages and
disadvantages. 請幫助我對這些研究方法和數據進行深度分析，併為我提供關
於其優缺點的評估。
6、提高可讀性
Act as an academic research expert and copywriter. Your task is to review
and enhance the readability of the provided [piece of text] in a research
paper. Ensure that the text is clear, concise, and free from jargon while
maintaining its academic integrity. 作為學術研究專家和文案撰寫人，提高研究論文文本的可讀性，確保內容清晰易
懂。
7、尋找數據源
 識別和編譯與研究主題相關的可信數據源，包括學術期刊、政府數據庫、
行業報告等。
 提供每個數據源的簡要描述，強調其相關性和可信度，並注意訪問限制。
Act as an academic research expert. Your task is to identify and compile
a list of credible data sources related to [topic]. Ensure that the sources
are reputable, recent, and relevant to the research objectives. 作為學術研究專家，識別和編譯與研究主題相關的可信數據源。
8.尋找並瞭解研究方向
 使用 GPT 作為學術研究專家，對指定主題進行廣泛的文獻搜索，確保來源
來自知名期刊、會議或學術機構。
 提供包括標題、作者、出版日期、摘要和全文鏈接的論文列表。
 對每篇論文寫一個簡短的總結，突出主要發現及其相關性，並確保引用來
源。
Act as an academic Research Expert. Conduct an extensive search for
research papers on the specified [topic]. Ensure the papers are from
reputable journals, conferences, or academic institutions. Provide a
comprehensive list of the findings, including the title of the paper,
authors, publication date, abstract, and a link to access the full paper.
For each paper, write a brief summary highlighting the main findings and
their relevance. 作為學術研究專家，對指定主題進行深入搜索，提供最新且權威的研究論文摘要。
9.總結論文要點
 閱讀並消化指定標題的研究論文內容，提供一個簡潔明瞭的總結，包括主
要發現、方法、結果和研究意義。
 確保總結對一般讀者友好，同時保留原文的核心見解和細節。
Act as an academic research expert. Read and digest the content of the
research paper titled [title]. Produce a concise and clear summary that
encapsulates the main findings, methodology, results, and implications
of the study. Ensure that the summary is written in a manner that is
accessible to a general audience while retaining the core insights and
nuances of the original paper. 作為學術研究專家，閱讀並總結研究論文的核心內容，使其對非專業讀者也易於
理解。
10.提出研究問題
 為給定主題制定一個全面的研究問題，確保問題清晰、具體且可研究。
 考慮潛在的變量、方法和結果，確保問題在學術討論和社會實踐中具有重
要性和相關性。
Act as an academic research expert. For the given [topic], formulate a
comprehensive research question that can guide a potential study. Ensure
the question is clear, specific, and researchable. It should address a
gap or need in the current body of knowledge, and have significance in
its respective field. 作為學術研究專家，為給定主題制定一個清晰、具體且可研究的研究問題。
11.找出合適的研究方法
 建議適合研究主題的定性和定量研究方法，並解釋每種方法的相關性和潛
在優勢。
 討論每種方法的侷限性和挑戰，並提供可能的解決方案或替代方法。
 找出合適的研究方法。
Act as an academic research expert. Your task is to suggest appropriate
methodologies for researching [topic]. Provide a comprehensive list of
both qualitative and quantitative research methods that are best suited
for the subject matter. 作為學術研究專家，建議適合研究主題的定性和定量研究方法，並解釋其適用性。
```


## 使用建議

- 將上方提示詞完整複製後發給 AI 即可使用。
- 如提示詞中含 [ ] 佔位或示例，替換為你自己的內容。
- 若輸出不滿意，補充風格、長度、平臺等偏好讓其迭代優化。
