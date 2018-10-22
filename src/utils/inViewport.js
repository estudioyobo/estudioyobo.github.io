/**
 * Check if an item is available inside the viewport
 * {@link https://github.com/zeusdeux/isInViewport/releases/tag/2.2.3}
 *
 * @param  {Node}  element
 * @param  {Onject}  options
 * @return {Boolean}
 */
export default function isInViewport(element, options) {
  var boundingRect = element.getBoundingClientRect();
  var top = boundingRect.top;
  var bottom = boundingRect.bottom;
  var left = boundingRect.left;
  var right = boundingRect.right;
  var settings = options || {};
  var isVisibleFlag = false;
  var $viewport = settings.viewport || window;
  var $viewportHeight = document.documentElement.clientHeight;
  var $viewportWidth = document.documentElement.clientWidth;
  var typeofViewport = window.toString();

  settings.tolerance = settings.tolerance || 0;

  //if the viewport is other than window recalculate the top,
  //bottom,left and right wrt the new viewport
  //the [object DOMWindow] check is for window object type in PhantomJS
  if (
    $viewport[0] !== window &&
    typeofViewport !== "[object Window]" &&
    typeofViewport !== "[object DOMWindow]"
  ) {
    // Use getBoundingClientRect() instead of $.Offset()
    // since the original top/bottom positions are calculated relative to browser viewport and not document
    var viewportRect = window.getBoundingClientRect();

    //recalculate these relative to viewport
    top = top - viewportRect.top;
    bottom = bottom - viewportRect.top;
    left = left - viewportRect.left;
    right = left + $viewportWidth;

    //get the scrollbar width from cache or calculate it
    isInViewport.scrollBarWidth =
      isInViewport.scrollBarWidth || getScrollbarWidth($viewport);

    //remove the width of the scrollbar from the viewport width
    $viewportWidth -= isInViewport.scrollBarWidth;
  }

  //handle falsy, non-number and non-integer tolerance value
  //same as checking using isNaN and then setting to 0
  //bitwise operators deserve some love too you know
  settings.tolerance = ~~Math.round(parseFloat(settings.tolerance));

  if (settings.tolerance < 0)
    settings.tolerance = $viewportHeight + settings.tolerance; //viewport height - tol

  //the element is NOT in viewport iff it is completely out of
  //viewport laterally or if it is completely out of the tolerance
  //region. Therefore, if it is partially in view then it is considered
  //to be in the viewport and hence true is returned

  //if the element is laterally outside the viewport
  if (Math.abs(left) >= $viewportWidth) return isVisibleFlag;

  //if the element is bound to some tolerance
  isVisibleFlag = settings.tolerance
    ? !!(top <= settings.tolerance && bottom >= settings.tolerance)
    : !!(bottom > 0 && top <= $viewportHeight);

  return isVisibleFlag;
}
