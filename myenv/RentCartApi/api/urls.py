from django.urls import path
from .views import *

urlpatterns = [
    path('api/auth/login/', ObtainAuthTokenView.as_view(), name='obtain_auth_token'),
    path('api/auth/logout/', LogoutView.as_view(), name='logout'),
    path('api/auth/validate-token/', ValidateTokenView.as_view(), name='validate_token'),
    path('api/user/', UserCreateView.as_view(), name='user-list-create'),
    path('api/user/<int:pk>/', UserRetrieveUpdateDeleteView.as_view(), name='user-retrieve-update-delete'),
    path('categories/', CategoryListCreateAPIView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryRetrieveUpdateDestroyAPIView.as_view(), name='category-retrieve-update-destroy'),
    path('orders/', OrderListCreateAPIView.as_view(), name='order-list-create'),
    path('orders/<int:pk>/', OrderRetrieveUpdateDestroyAPIView.as_view(), name='order-retrieve-update-destroy'),
    path('products/', ProductListCreateAPIView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductRetrieveUpdateDestroyAPIView.as_view(), name='product-retrieve-update-destroy'),
    path('product-images/', ProductImageListCreateAPIView.as_view(), name='product-image-list-create'),
    path('product-images/<int:pk>/', ProductImageRetrieveUpdateDestroyAPIView.as_view(),name="pproduct-image-retrieve-update-destroy"),
    path('Review/', ReviewListCreateAPIView.as_view(), name='product-image-list-create'),
    path('Review/<int:pk>/', ReviewRetrieveUpdateDestroyAPIView.as_view()),
    path('Messages/',MessageListCreateApiView.as_view()),
    path('Message/int:pk/',MessageRetrieveUpdateDestroyAPIView.as_view())
]
