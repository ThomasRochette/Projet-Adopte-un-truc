from django.shortcuts import render
#from __future__ import unicode_literals
from django.http import HttpResponse
from django.http import Http404
from django.shortcuts import redirect
from datetime import datetime
from django.shortcuts import get_object_or_404
from appPrincipale.models import Categorie,Objet
from .forms import ObjetForm, ComentaireForm


# Create your views here.
#voir MonObjet et les images

def new_blog(request):
    	return render(request , 'appPrincipale/blog.html')

def new_about(request):
    return render(request, 'appPrincipale/about.html')

def new_contact(request):
    return render(request, 'appPrincipale/contact.html')

def new_index(request):
    categories = Categorie.objects.all()
    objets = Objet.objects.all()
    return render(request, 'appPrincipale/index.html',locals())

def new_services(request):
    return render(request, 'appPrincipale/services.html')

def new_work(request):
    categories = Categorie.objects.all()
    if request.method=="GET":
        objets = Objet.objects.all()
    if request.method == "POST":
        string_titre_catgorie = request.POST.get("Titre_Categorie")
        macat=Categorie.objects.filter(titre=string_titre_catgorie)
        objets = Objet.objects.filter(categorie=macat)

    return render(request, 'appPrincipale/work.html', locals())


def lire(request):
    monobjet = Objet.objects.all()
    return render(request, 'appPrincipale/lire.html', {'objets': monobjet})


def VOIRFormulaire(request) :

	if request.method=="GET" :
		monid=request.GET.get("return_objet","0");
		for article in Objet.objects.filter(id=monid):
			form=ObjetForm(instance=article)
			modifie=True
			objetID=article.id

	if request.method=="POST" :
		monid=request.POST.get("return_objet","0");
		nom="caca"
		if monid != "0" :
			for article in Objet.objects.filter(id=monid):
					nom=article.nom
			form=ObjetForm(request.POST, instance=article)
		else :
			form=ObjetForm(request.POST or None)

		if form.is_valid():
			form.save()
			envoie=True

	return render(request , 'appPrincipale/voirFormulaire.html', locals())

def supprimer_objet(request):
	if request.method=="POST" :
		monid=request.POST.get("return_objet","0");
		for article in Objet.objects.filter(id=monid):
			article.delete();
	return redirect(lire)

def TOUTsupprimer(request) :
	for article in Objet.objects.all():
			article.delete();
	return redirect(lire)

def formulaire_commentaire(request):
    form=ComentaireForm(request.POST or None)
    if form.is_valid() :
        form.save()
        envoie=True
    return render(request , 'appPrincipale/voirFormulaire_commentaire.html', locals())
