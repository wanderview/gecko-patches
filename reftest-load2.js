# HG changeset patch
# User Ben Kelly <ben@wanderview.com>
# Parent  3a2e0e9101b563ad84a9f3741bc3cc1c23191b4b

diff --git a/layout/tools/reftest/reftest-content.js b/layout/tools/reftest/reftest-content.js
--- a/layout/tools/reftest/reftest-content.js
+++ b/layout/tools/reftest/reftest-content.js
@@ -758,17 +758,17 @@ function OnDocumentLoad(event)
         }
 
         // Since we can't use a bubbling-phase load listener from chrome,
         // this is a capturing phase listener.  So do setTimeout twice, the
         // first to get us after the onload has fired in the content, and
         // the second to get us after any setTimeout(foo, 0) in the content.
         gFailureReason = "timed out waiting for test to complete (waiting for onload scripts to complete)";
         LogInfo("OnDocumentLoad triggering AfterOnLoadScripts");
-        setTimeout(function () { setTimeout(AfterOnLoadScripts, 10); }, 0);
+        setTimeout(function () { setTimeout(AfterOnLoadScripts, 10); }, 10);
     }
 }
 
 function CheckLayerAssertions(contentRootElement)
 {
     if (!contentRootElement) {
         return;
     }
