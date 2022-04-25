### Solving Production Issue

- Step 1: When you first receive information of this issue either through ticket or emai, try to read carefully so that you can clearly understand the it and avoid scenario of acknowledging the incorrect issue. If you are not sure about something, have clear communication with the person who reported the issue and ask questions. The best communication method is meeting in person. If not possible, a video call or audio call can be the best alternatives.

- Step 2: Try to replicate the issue.

- Step 2: Evaluate the level of priority for this ticket. There are some factors can be taken into consideration. Some of which are how many customers are being affected, how much money company is loosing because of the issue, is the issue preventing users from taking important actions, etc. The best person who can assist you with this is your PM or nearest position, such as BA or senior devs

- Step 3: Identify the expectation on resolving the ticket. Questions to be answered:

  - When is it expected to be resolved? 1 hour, 2 hour, this afternoon, tomorrow or sometime this week?
  - Should we resolve the issue in one go, or should it be sliced down into different tickets?
  - If we can separate the issue, which parts should be resolved first?

- Step 3: Make decision on how to response, whether it should be a hotfix or should be a normal bug ticket based on the evaluation in step 2. The best person who can assist you with this is your PM or team lead.

- Step 4: Identify where the issue comes from, is it from your code change of the previous ticket? If that's the case, have a look back into your MR/PR to trace it down. If it's not the case, try to find the root cause, where and when it happened and then communicate with the person who made the code changes and see if they are available for resolving this issue. Depends on the situation, if they are not available, you can take the responsibility. If they are available and willing to take on the issue, you can offer your support accordingly.

- Step 5: Once the root cause is identified, provide solution and make the code changes, do the unit test, create MR for review. Once the MR is approved and merged, you'll need to test on production carefully to make sure the code change doesn't create any other problems. You'd better resolve the issue in one go!!

- Step 6: After the issue is confirmed resolved, depends on the severity of the issue, you can catch up with your team lead and PM or senior devs to talk about lesson learned, how it can be avoided next time

- Step 7: Make documentation whenever you can
