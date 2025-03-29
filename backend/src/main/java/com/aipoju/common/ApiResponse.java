package com.aipoju.common;

import lombok.Data;

@Data
public class ApiResponse<T> {
    private boolean success;
    private String code;
    private String message;
    private T data;

    public static <T> ApiResponse<T> success(T data) {
        ApiResponse<T> response = new ApiResponse<>();
        response.setSuccess(true);
        response.setCode("SUCCESS");
        response.setMessage("操作成功");
        response.setData(data);
        return response;
    }

    public static <T> ApiResponse<T> success() {
        return success(null);
    }

    public static <T> ApiResponse<T> error(String code, String message) {
        ApiResponse<T> response = new ApiResponse<>();
        response.setSuccess(false);
        response.setCode(code);
        response.setMessage(message);
        return response;
    }

    public static <T> ApiResponse<T> error(String message) {
        return error("ERROR", message);
    }
} 