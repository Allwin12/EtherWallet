from django.shortcuts import render

# Create your views here.
def homepage(request):
    return render(request,"home.html");

def wallet(request):
    return render(request,"wallet.html");

def importpage(request):
    return render(request,"import.html");