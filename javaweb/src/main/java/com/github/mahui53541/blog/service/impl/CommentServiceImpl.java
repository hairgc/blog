package com.github.mahui53541.blog.service.impl;

import com.github.mahui53541.blog.po.Comment;
import com.github.mahui53541.blog.po.User;
import com.github.mahui53541.blog.service.CommentService;
import org.apache.ibatis.session.RowBounds;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by mahui on 2017/5/29.
 */
@Service
public class CommentServiceImpl extends BaseServiceImpl<Comment,Integer> implements CommentService{
    @Override
    public List<Comment> selectByPostId(RowBounds rowBounds, Integer postId) {
        return commentMapper.selectByPostId(rowBounds,postId);
    }

    @Override
    public List<Comment> selectAllByPostId(RowBounds rowBounds, Integer postId) {
        return commentMapper.selectAllByPostId(rowBounds,postId);
    }

    @Override
    public int countAll() {
        return commentMapper.countAll();
    }

    @Override
    public void editComment(Comment comment) {
        Comment oldc=commentMapper.selectByPrimaryKey(comment.getId());
        if(oldc.getStatus()==0){
            if(comment.getStatus()>0){
                postMapper.commentTimesPlusOne(comment.getPost().getId());
            }
        }else{
            if(comment.getStatus()==0){
                postMapper.commentTimesMinusOne(comment.getPost().getId());
            }
        }
        commentMapper.updateByPrimaryKeySelective(comment);
    }

    @Override
    public void newComment(Comment comment) {
        Session session= SecurityUtils.getSubject().getSession(false);
        if(session!=null){
            User user=(User)session.getAttribute("user");
            comment.setUser(user);
        }
        comment.setCommentTime(new Date());
        comment.setStatus(1);
        commentMapper.insertSelective(comment);
        //文章对应的评论数加一
        postMapper.commentTimesPlusOne(comment.getPost().getId());
    }

    @Override
    public void deleteComment(Comment comment) {
        //文章对应的评论数减一
        comment.setStatus(0);
        commentMapper.updateByPrimaryKeySelective(comment);
        postMapper.commentTimesMinusOne(comment.getPost().getId());
    }
}
