{let t=function(){let t=$("#new-post-form");t.submit((function(o){o.preventDefault(),$.ajax({type:"post",url:"/posts/create",data:t.serialize(),success:function(t){let o=e(t.data.post);$("#posts-list-container>ul").prepend(o),n($(" .delete-post-button",o)),new PostComments(t.data.post._id),new ToggleLike($(" .toggle-like-button",o)),new Noty({theme:"relax",text:"Post published!",type:"success",layout:"topRight",timeout:1500}).show()},error:function(t){console.log(t.responseText)}})}))},e=function(t){return $(`<li id="post-${t._id}">\n                        <div class="modal-content">\n                        <div class="modal-header">\n                          <a\n                          type="button"\n                          class="btn close delete-post-button"\n                          data-dismiss="modal"\n                          href="/posts/destroy/${t._id}"\n                        >&times;</a>\n                          \x3c!-- <button type="button" class="close" >\n                            \n                          </button> --\x3e\n                          <h4 class="modal-title">${t.user.name}</h4>\n                        </div>\n                        <div class="modal-body">\n                          <p>${t.content}</p>\n                        </div>\n                        <a\n                          class="toggle-like-button"\n                          data-likes="0"\n                          href="/likes/toggle/?id=${t._id}&type=Post"\n                        >\n                        <p class="likes">\n                          0 Likes\n                          </p>\n                          </a>\n                        </small>\n                    </p>\n\n                    <div class="post-comments">\n                        \n                            <form id="post-${t._id}-comments-form" action="/comments/create" method="POST">\n                                <input type="text" name="content" placeholder="Type Here to add comment..." required>\n                                <input type="hidden" name="post" value="${t._id}" >\n                                <input type="submit" value="Add Comment">\n                            </form>\n               \n                \n                        <div class="post-comments-list">\n                            <ul id="post-comments-${t._id}">\n                                \n                            </ul>\n                        </div>\n                    </div>\n                    \n                </li>`)},n=function(t){$(t).click((function(e){e.preventDefault(),$.ajax({type:"get",url:$(t).prop("href"),success:function(t){$("#post-"+t.data.post_id).remove(),new Noty({theme:"relax",text:"Post Deleted",type:"success",layout:"topRight",timeout:1500}).show()},error:function(t){console.log(t.responseText)}})}))},o=function(){$("#posts-list-container>ul>li").each((function(){let t=$(this),e=$(" .delete-post-button",t);n(e);let o=t.prop("id").split("-")[1];new PostComments(o)}))};t(),o()}